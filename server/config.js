'use strict';

module.exports = {
  default: {
    connections: {
      default: {
        connection: {
          host: '127.0.0.1',
          port: 6379,
          db: 0
        },
        settings: {
          debug: false,
          cluster: false
        }
      }
    },
    redlock: {
      enabled: false,
      databases: [],
      options: {
        driftFactor: 0.01,
        retryCount: 10,
        retryDelay: 200,
        retryJitter: 200,
        automaticExtensionThreshold: 500,
      },
    },
  },
  validator(config) {},
};
