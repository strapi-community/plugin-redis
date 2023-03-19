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
          socket:{
            socketPath: '/var/run/redis/redis.sock'
          },
          db: 0,
        },
      },
    },
  },
  validator() {},
};
