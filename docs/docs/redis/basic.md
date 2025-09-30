---
sidebar_label: 'Basic'
slug: '/redis/basic'
---

# Basic Single Node Config

The default configuration for the Redis plugin is a single node configuration. This is the most common configuration for Redis and is the default configuration for the plugin.

```javascript
// path ./config/plugins.js

module.exports = {
  redis: {
    config: {
      settings:{
        debug: false,
        enableRedlock: true,
      },
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
