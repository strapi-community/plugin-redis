/**
 * @typedef {import('@strapi/strapi').Strapi} Strapi
 */
const Redis = require("ioredis");
const permissionsActions = require('./permissions-actions');

module.exports = async ({ strapi }) => {
  const coreConfig = strapi.config.get('plugin.redis')

  strapi.redis = {
    config: coreConfig,
    connections: {}
  }

  Object.keys(coreConfig.connections).forEach((name) => {
    if (coreConfig.connections[name].settings.cluster === true) {
      strapi.redis.connections[name] = {
        client: new Redis.Cluster(
          coreConfig.connections[name].connection.nodes,
          coreConfig.connections[name].connection.options
        )
      }
    } else {
      strapi.redis.connections[name] = {
        client: new Redis(coreConfig.connections[name].connection)
      }
    }

  })
};
