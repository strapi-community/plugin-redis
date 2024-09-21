'use strict';

const debug = require('debug');
const { default: Redlock } = require('redlock');

module.exports = async ({ strapi }) => {
  // Load plugin Config
  const coreConfig = strapi.config.get('plugin::redis');

  // Configure plugin debug
  if (coreConfig.settings.debug === true) {
    debug.enable('strapi:strapi-plugin-redis');
  }

  // Allow plugin + ioredis debug
  if (coreConfig.settings.debug === true && coreConfig.settings.debugIORedis === true) {
    debug.enable('strapi:strapi-plugin-redis,ioredis:*');
  }

  // Construct Redis API
  strapi.redis = {
    config: coreConfig,
    connections: {},
  };

  // Build Redis database connections
  await strapi.plugin('redis').service('connection').buildAll(coreConfig);

  // Configure Redlock
  if (coreConfig.settings.enableRedlock === true) {
    const originalAdd = strapi.cron.add;
    const redlockConfig = coreConfig.settings.redlockConfig;

    strapi.cron.add = (tasks) => {
      const generateRedlockFunction = (originalFunction, name) => {
        return async (...args) => {
          const connections = Object.keys(strapi.redis.connections).map((key) => {
            return strapi.redis.connections[key].client;
          });
          const redlock = new Redlock(connections, redlockConfig);

          let lock;
          try {
            lock = await redlock.acquire([name], coreConfig.settings.lockTTL);
            debug(`Job ${name} acquired lock`);
            await originalFunction(...args);
          } catch (e) {
            debug(`Job ${name} failed to acquire lock`);
          } finally {
            // wait some time so other processes will lose the lock
            let lockDelay = coreConfig.settings.lockDelay
              ? coreConfig.settings.lockDelay
              : coreConfig.settings.redlockConfig.retryCount *
                (coreConfig.settings.redlockConfig.retryDelay +
                  coreConfig.settings.redlockConfig.retryJitter);
            debug(`Job ${name} waiting ${lockDelay}ms before releasing lock`);
            await new Promise((resolve) => setTimeout(resolve, lockDelay));
            if (lock) {
              debug(`Job ${name} releasing lock`);
              try {
                await lock.release();
              } catch (e) {
                debug(`Job ${name} failed to release lock ${e}`);
              }
            }
          }
        };
      };
      Object.keys(tasks).forEach((key) => {
        const taskValue = tasks[key];
        if (typeof taskValue === 'function') {
          strapi.log.info('redlock requires tasks to use the object format');
          return;
        } else if (
          typeof taskValue === 'object' &&
          taskValue &&
          typeof taskValue.task === 'function' &&
          taskValue.bypassRedlock !== true
        ) {
          // fallback to key if no name is provided
          const taskName = taskValue.name || key;
          taskValue.task = generateRedlockFunction(taskValue.task, 'redlock:' + taskName);
        }
      });
      originalAdd(tasks);
    };
  }
};
