---
sidebar_label: 'Introduction'
slug: '/'
---

# Introduction

The purpose of this package is to have a universal Redis connector for all packages wanting to utilize a Redis database and/or for those wanting to develop custom functions and code within your Strapi project and would prefer a centralized Redis database for various purposes.

This package is a wrapper around the `ioredis` package and provides a simple and easy-to-use interface for connecting to a Redis (or Redis alternative) database.

Likewise, this package also includes the `redlock` package for distributed locks. Currently, if you horizontally scale Strapi and use the cron feature, you will end up with multiple instances of Strapi running the same cron job at the same time, potentially causing race conditions. This can cause issues with your database or other services that you are trying to integrate with. If enabled the Redlock option will automatically force those cron jobs to establish a lock before running the job meaning that only one instance of Strapi will run the job at a time.

## Features

- **Universal Redis Connector**: This package is a universal Redis connector for all packages wanting to utilize a Redis database.
- **Multiple Redis Connections**: This package supports multiple Redis connections.
- **Cluster/Sentinel Support**: This package supports Redis Cluster and Redis Sentinel.
- **Redlock Support**: This package supports Redlock for distributed locks.
- **Automatic Redlock CronTasks**: This package automatically uses Redlock for Strapi built-in CronTasks.

## Possible Future Features

- **Admin Panel Interface to see all Redis Connections**: This package may include an admin panel interface to see all Redis connections and their status.
- **Admin Panel Interface to see all Redis Key/Values**: This package may include an admin panel interface to see all Redis keys and their values.
- **Admin Panel Interface to see all Redis Server Status**: This package may include an admin panel interface to see all Redis server status (memory usage, CPU usage, etc).

## Common Use-cases

- **Caching**: This package can be used for caching data, for example see the LRU based plugin that uses this package called [REST Cache](/plugins/rest-cache).
- **Apollo Server GraphQL Cache**: This package can be used for caching Apollo Server GraphQL data.
- **IP based Rate Limiting**: This package can be used for IP based rate limiting using something like [koa2-ratelimit](https://www.npmjs.com/package/koa2-ratelimit).
- **Server-side User Sessions**: This package can be used for server-side user session storage and management.
- **So Much More**: The possibilities are endless!
