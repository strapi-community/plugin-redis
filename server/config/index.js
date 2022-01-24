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
        }
      }
    },
  },
  validator(config) {},
};
