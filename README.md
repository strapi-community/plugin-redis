<div align="center">
<h1>Strapi Redis Plugin</h1>
	
<p style="margin-top: 0;">Redis Connector Package for use in other plugins and packages.</p>
	
<p>
  <a href="https://discord.strapi.io">
    <img src="https://img.shields.io/discord/811989166782021633?color=blue&label=strapi-discord" alt="Strapi Discord">
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-redis">
    <img src="https://img.shields.io/npm/v/strapi-plugin-redis/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-redis">
    <img src="https://img.shields.io/npm/dm/strapi-plugin-redis" alt="Monthly download on NPM" />
  </a>
  <a href="https://www.npmjs.org/package/strapi-plugin-redis">
    <img src="https://img.shields.io/snyk/vulnerabilities/github/strapi-community/strapi-plugin-redis?label=snyk%20vulnerabilities" alt="Vulnerabilities on Snyk" />
  </a>
</p>
</div>

## Table of Contents <!-- omit in toc -->

- [🚦 Current Status](#-current-status)
- [🛑 Foreword](#-foreword)
- [✨ Features](#-features)
- [🤔 Motivation](#-motivation)
- [🖐 Requirements](#-requirements)
- [⏳ Installation](#-installation)
- [🔧 Configuration](#-configuration)
  - [Single Redis Node](#single-redis-node)
  - [Sentinel Replica (3 node)](#sentinel-replica-3-node)
  - [Using TLS with authentication](#using-tls-with-authentication)
- [🚚 Usage and API](#-usage-and-api)
  - [Config](#config)
  - [Connections](#connections)
    - [Redis Client](#redis-client)
- [Contributing](#contributing)
- [License](#license)

## 🚦 Current Status

This package is currently under development and should be consider **ALPHA** in terms of state. I/We are currently accepting contributions and/or dedicated contributors to help develop and maintain this package.

For more information on contributing please see [the contrib message below](#contributing).

## 🛑 Foreword

This package's lead maintainer is an employee of Strapi however this package is not officially maintained by Strapi Solutions SAS nor Strapi, Inc. and is currently maintained in the free time of the lead maintainer. 

**Absolutely no part of this code should be considered covered under any agreement you have with Strapi proper** including but not limited to any Enterprise Agreement you have with Strapi.

## ✨ Features

This plugin utilizes 1 core package:

- [ioredis](https://github.com/luin/ioredis) - for all connection management

These are the primary features that are finished or currently being worked on:

- [x] Redis Single Node Support
- [x] Redis Replica + Sentinel Support
- [ ] Redis Sharding Support (assumed working, no config samples)
- [x] Multiple connections/databases

## 🤔 Motivation

The purpose of this package is to have a universal Redis connector for all packages wanting to utilize a Redis database and/or for those wanting to develop custom functions and code within your Strapi project and would prefer a centralized Redis database for various purposes.

A few examples of where Redis could be used within a Strapi application:

- LRU-based response cache for REST
- Apollo server GraphQL cache
- IP Rate-limiting using something like [koa2-ratelimit](https://www.npmjs.com/package/koa2-ratelimit)
- Distributed Redis locks for Strapi clusters (useful for clustered usage of cron tasks)
- So much more

If you are currently using this package in your plugin and would like to be featured, please feel free to submit an issue to have your plugin added to the list below:

- [strapi-plugin-rest-cache](https://www.npmjs.com/package/strapi-plugin-rest-cache)
  - via: [strapi-provider-rest-cache-redis](https://www.npmjs.com/package/strapi-provider-rest-cache-redis)
- More plugins coming soon!

## 🖐 Requirements

Supported Strapi Versions:

- Strapi v4.0.x
- Strapi v4.1.x
- Strapi v4.2.x (Tested July 2022)

**This plugin will not work with Strapi v3 projects as it utilizes APIs that don't exist in the v3!**

## ⏳ Installation

Install the plugin in your Strapi project or your Strapi plugin.

```bash
# Using Yarn (Recommended)
yarn add strapi-plugin-redis

# Using npm
npm install strapi-plugin-redis --save
```

## 🔧 Configuration

WIP

### Single Redis Node

```js
// path ./config/plugins.js

module.exports = {
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: '127.0.0.1',
            port: 6379,
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
};
```

### Sentinel Replica (3 node)

```js
// path ./config/plugins.js

module.exports = {
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            sentinels: [
              { host: "192.168.1.101", port: 26379 },
              { host: "192.168.1.102", port: 26379 },
              { host: "192.168.1.103", port: 26379 },
            ],
            name: "my-redis-replicaSet",
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
};
```

### Using TLS with authentication

```js
// path ./config/plugins.js
const { readFileSync } = require('fs')

module.exports = {
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            // @see https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
            host: '127.0.0.1',
            port: 6379,
            db: 0,
            user: 'username',
            password: 'secret',
            // @see https://github.com/luin/ioredis#tls-options
            tls: { 
              ca: readFileSync("cert.pem"),
            },
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
};
```

## 🚚 Usage and API

This plugin directly mounts each Redis DB client and it's config on `strapi.redis`

### Config

Access with: `strapi.redis.config`

The config key contains the entire plugin config including all ioredis instances configurations. These should not be modified after bootstrapping your Strapi application (aka while the server is running).

### Connections

Access with: `strapi.redis.connections`

For each connection either a normal Redis client is created, or if the cluster setting is enabled and you have properly passed in an array of nodes (and optionally any cluster options) a Redis Cluster client.

#### Redis Client

Accessed with: `strapi.redis.connections.default.client`
*Note you can swap the default key with any other named database you have configured*

From here you have full access to the [ioredis API](https://github.com/luin/ioredis/blob/master/API.md).

## Contributing

I/We are actively looking for contributors, maintainers, and others to help shape this package. As this plugins sole purpose within the Strapi community is to be used by other developers and plugin maintainers to help ease the connection to Redis databases.

Instead of reinventing the wheel every time you need to connect to Redis, the hope is to centralize the connections in a single plugin that all plugins can piggy back on.

If interested please feel free to email the lead maintainer Derrick at: derrickmehaffy@gmail.com or ping `DMehaffy#1337` on Discord.

**Please Note**: This package is maintained collectively by the [strapi community organization](https://github.com/strapi-community). While there may be a lead maintainer, they are not the sole maintainer of this code and this code does not belong to the lead maintainer.

## License

See the [LICENSE](./LICENSE.md) file for licensing information.
