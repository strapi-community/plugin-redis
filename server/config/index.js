'use strict';

module.exports = {
  default: {
    settings: {
      debug: false,
      debugIORedis: false,
      redlockConfig: {
        driftFactor: 0.01,
        retryCount: 10,
        retryDelay: 200,
        retryJitter: 200,
      },
      enableRedlock: false,
      lockDelay: null,
      lockTTL: 5000,
    },
    connections: {
      default: {
        connection: {
          host: '127.0.0.1',
          port: 6379,
          db: 0,
        },
      },
    },
  },
  validator() {},
};
