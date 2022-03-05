'use strict';

module.exports = {
  default: {
    settings: {
      debug: false,
      debugIORedis: false,
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
