---
sidebar_label: 'Sentinel'
slug: '/redis/sentinel'
---

# Redis Sentinel Replica Config (3 Node)

The Redis plugin supports Redis Sentinel for high availability and failover. This is a common configuration for Redis in production environments.

```javascript
// path ./config/plugins.js

module.exports = {
  redis: {
    config: {
      settings:{
        debug: false,
        enableRedlock: true,
      }
      connections: {
        default: {
          connection: {
            sentinels: [
              { host: '192.168.1.101', port: 26379 },
              { host: '192.168.1.102', port: 26379 },
              { host: '192.168.1.103', port: 26379 },
            ],
            name: 'my-redis-replicaSet',
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
