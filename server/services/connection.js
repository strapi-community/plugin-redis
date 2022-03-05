'use strict';

const Redis = require('ioredis');
const chalk = require('chalk');
const debug = require('debug')('strapi:strapi-plugin-redis');

module.exports = ({ strapi }) => ({
  buildAll(config) {
    const coreConfig = config;

    // Loop through all connections and start building and mounting them
    Object.keys(coreConfig.connections).forEach((name) => {
      debug(`${chalk.yellow('Building')} ${name} connection`);
      const nameConfig = coreConfig.connections[name];

      // Check for cluster
      if (nameConfig.connection.nodes) {
        try {
          strapi.redis.connections[name] = {
            client: new Redis.Cluster(nameConfig.connection.nodes, nameConfig.connection.options),
          };
          debug(`${chalk.green('Built')} ${name} connection - ${chalk.blue('cluster')}`);
        } catch (e) {
          debug(`${chalk.red('Failed to build')} ${name} connection - ${chalk.blue('cluster')}`);
        }

      // Check for sentinel config
      } else if (nameConfig.connection.sentinels) {
        delete nameConfig.connection.host;
        delete nameConfig.connection.port;
        try {
          strapi.redis.connections[name] = {
            client: new Redis(nameConfig.connection),
          };
          debug(`${chalk.green('Built')} ${name} connection - ${chalk.yellow('sentinel')}`);
        } catch (e) {
          debug(`${chalk.red('Failed to build')} ${name} connection - ${chalk.yellow('sentinel')}`);
        }

      // Check for regular single connection
      } else {
        try {
          strapi.redis.connections[name] = {
            client: new Redis(nameConfig.connection),
          };
          debug(`${chalk.green('Built')} ${name} connection - ${chalk.magenta('stand-alone')}`);
        } catch (e) {
          debug(
            `${chalk.red('Failed to build')} ${name} connection - ${chalk.magenta('stand-alone')}`
          );
        }
      }
    });
  },
});
