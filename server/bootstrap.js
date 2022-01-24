module.exports = async ({ strapi }) => {
  // Load plugin Config
  const coreConfig = strapi.config.get('plugin.redis');

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
