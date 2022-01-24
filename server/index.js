'use strict';

const bootstrap = require('./bootstrap');
const config = require('./config');
const controllers = require('./controllers');
const routes = require('./routes');
const services = require('./services');
// const middlewares = require('./middlewares');
// const policies = require('./policies');

module.exports = {
  bootstrap,
  config,
  controllers,
  routes,
  services,
  // policies,
  // middlewares,
};
