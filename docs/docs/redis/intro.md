---
sidebar_label: 'Introduction'
slug: '/redis/intro'
---

# Configuration Introduction

The Redis plugin for Strapi is a simple wrapper around the [ioredis](https://github.com/luin/ioredis) package but also includes the [redlock](https://www.npmjs.com/package/redlock) package for distributed locks. This plugin provides a simple and easy-to-use interface for connecting to a Redis (or Redis alternative) database.

## Complete Configuration

This configuration table does not include **all possible options** as many of them come from [ioredis](https://github.com/luin/ioredis) directly and what is shown here is mostly those options related to the plugin specifically and showing the default values.

| Key                                       | Description                                       | Type    | Default     |
|-------------------------------------------|---------------------------------------------------|---------|-------------|
| `settings`                                | The settings for the Redis plugin.                | Object  | N/A         |
| `settings.debug`                          | Whether to enable debug mode.                     | Boolean | `false`     |
| `settings.debugIORedis`                   | Whether to enable debug mode for ioredis.         | Boolean | `false`     |
| `settings.enableRedlock`                  | Whether to enable redlock for distributed locks.  | Boolean | `false`     |
| `settings.lockDelay`                      | The delay in milliseconds for the lock.           | Number  | `null`      |
| `settings.lockTTL`                        | The time-to-live in milliseconds for the lock.    | Number  | `5000`      |
| `settings.redlockConfig`                  | The redlock configuration.                        | Object  | N/A         |
| `settings.redlockConfig.driftFactor`      | The drift factor for redlock.                     | Number  | `0.01`      |
| `settings.redlockConfig.retryCount`       | The retry count for redlock.                      | Number  | `10`        |
| `settings.redlockConfig.retryDelay`       | The retry delay for redlock.                      | Number  | `200`       |
| `settings.redlockConfig.retryJitter`      | The retry jitter for redlock.                     | Number  | `200`       |
| `connections`                             | The connections for the Redis plugin.             | Object  | N/A         |
| `connections.default`                     | The default connection for the Redis plugin.      | Object  | N/A         |
| `connections.default.connection`          | The object passed to ioredis directly             | Object  | N/A         |
| `connections.default.connection.host`     | The host for the connection.                      | String  | `127.0.0.1` |
| `connections.default.connection.port`     | The port for the connection.                      | Number  | `6379`      |
| `connections.default.connection.password` | The password for the connection.                  | String  | `null`      |
| `connections.default.connection.db`       | The database for the connection.                  | Number  | `0`         |
| `connections.default.settings`            | The settings for the connection.                  | Object  | N/A         |
| `connections.default.settings.debug`      | Whether to enable debug mode for this connection. | Boolean | `false`     |
