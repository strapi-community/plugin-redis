'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('redis')
      .service('config')
      .getWelcomeMessage();
  },
};
