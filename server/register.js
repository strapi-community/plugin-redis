'use strict'

const debug = require('debug')

module.exports = async ({ strapi }) => {
  // Load plugin Config
  const coreConfig = strapi.config.get('plugin.redis');

  // Configure plugin debug
  if (coreConfig.settings.debug === true) {
    debug.enable('strapi:strapi-plugin-redis')
  }

  // Allow plugin + ioredis debug
  if (coreConfig.settings.debug === true && coreConfig.settings.debugIORedis === true) {
    debug.enable('strapi:strapi-plugin-redis,ioredis:*')
  }

  // Construct Redis API
  strapi.redis = {
    config: coreConfig,
    connections: {},
  };

  // Build Redis database connections
  await strapi.plugin('redis').service('connection').buildAll(coreConfig);

  // Construct Admin Permissions
  const actions = [
    {
      section: 'settings',
      category: 'redis',
      displayName: 'Access the Redis Overview page',
      uid: 'settings.read',
      pluginName: 'redis',
    },
  ];
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};
