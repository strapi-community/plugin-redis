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
- [Contributing](#contributing)
- [License](#license)

## 🚦 Current Status

This package is currently maintained and should be considered **Stable/GA** in terms of state. I/We are currently accepting contributions and/or dedicated contributors to help develop and maintain this package.

For more information on contributing please see [the contrib message below](#contributing).

## 🛑 Foreword

This package's lead maintainer is an employee of Strapi however this package is not officially maintained by Strapi Solutions SAS nor Strapi, Inc. and is currently maintained in the free time of the lead maintainer.

> [!WARNING]
**Absolutely no part of this code should be considered covered under any agreement you have with Strapi proper** including but not limited to any Enterprise and/or Cloud Agreement you have with Strapi.

## ✨ Features

This plugin utilizes 2 core packages:

- [ioredis](https://github.com/luin/ioredis) - for all connection management to any Redis or Redis-compatible database
- [redlock](https://github.com/mike-marcacci/node-redlock) - for distributed locks related to Strapi's built in cron-tasks system

These are the primary features that are finished or currently being worked on:

- [ ] Updated/New Documentation outside of this README
- [x] Multiple connections/databases
- [x] Redlock capabilities with Strapi's built-in cron tasks
- [ ] Admin Panel interface to see all existing connections
- [ ] Admin Panel interface to see the stored key/values within the connections
- [ ] Admin Panel interface to see the current server statistics

## 🤔 Motivation

The purpose of this package is to have a universal Redis connector for all packages wanting to utilize a Redis database and/or for those wanting to develop custom functions and code within your Strapi project and would prefer a centralized Redis database for various purposes.

A few examples of where Redis could be used within a Strapi application:

- LRU-based response cache for REST
- Apollo server GraphQL cache
- IP Rate-limiting using something like [koa2-ratelimit](https://www.npmjs.com/package/koa2-ratelimit)
- Server-side user session storage
- So much more

If you are currently using this package in your plugin and would like to be featured, please feel free to submit an issue to have your plugin added to the list below:

- [strapi-plugin-rest-cache](https://www.npmjs.com/package/strapi-plugin-rest-cache)
  - via: [strapi-provider-rest-cache-redis](https://www.npmjs.com/package/strapi-provider-rest-cache-redis)
- More plugins coming soon!

Note the following packages used to use this package with Strapi v4 but have since been merged into this package:

- [strapi-plugin-redcron](https://www.npmjs.com/package/strapi-plugin-redcron)

## 🖐 Requirements

> [!CAUTION]
> This plugin will not work with Strapi v3 projects as it utilizes APIs that don't exist in the v3!

Supported Strapi Versions:

| Strapi Version | Plugin Version | Supported | Tested On |
|----------------|----------------|-----------|-----------|
| v3.x.x         | N/A            | ❌         | N/A       |
| v4.x.x         | 1.1.0          | ✅         | Sept 2024 |
| v5.x.x         | 2.0.0          | ✅         | Sept 2024 |

## ⏳ Installation

> [!WARNING]
For Strapi 4 projects you should use the `1.x.x` version of this plugin, for Strapi 5 projects you should use the `2.x.x` version of this plugin.

> [!NOTE]
For Strapi 5 the package name has changed from `strapi-plugin-redis` to `@strapi-community/plugin-redis`.

Install the plugin in your Strapi project or your Strapi plugin.

| Strapi Version | Plugin Version | Package Manager | Command                                   |
|----------------|----------------|-----------------|-------------------------------------------|
| v4.x.x         | 1.1.0          | Yarn            | `yarn add strapi-plugin-redis@1.1.0`      |
| v5.x.x         | Latest         | Yarn            | `yarn add @strapi-community/plugin-redis` |
| v4.x.x         | 1.1.0          | npm             | `npm i strapi-plugin-redis@1.1.0`         |
| v5.x.x         | Latest         | npm             | `npm i @strapi-community/plugin-redis`    |

## 🔧 Configuration

New Documentation is a WIP

## Contributing

I/We are actively looking for contributors, maintainers, and others to help shape this package. As this plugins sole purpose within the Strapi community is to be used by other developers and plugin maintainers to help ease the connection to Redis databases.

Instead of reinventing the wheel every time you need to connect to Redis, the hope is to centralize the connections in a single plugin that all plugins can piggy back on.

If interested please feel free to open up a GitHub issue/PR or ping `DMehaffy` on Discord.

> [!NOTE]
This package is maintained collectively by the [strapi community organization](https://github.com/strapi-community). While there may be a lead maintainer, they are not the sole maintainer of this code and this code does not belong to the lead maintainer.

## License

See the [LICENSE](./LICENSE.md) file for licensing information.
