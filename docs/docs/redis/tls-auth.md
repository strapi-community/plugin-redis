---
sidebar_label: 'TLS Authentication'
slug: '/redis/tls-auth'
---

# TLS Authentication

To enable TLS authentication, you need to provide the `tls` option in the connection configuration and load in the necessary certificates.

```javascript
// path ./config/plugins.js
const { readFileSync } = require('fs');

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
            // @see https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
            host: '127.0.0.1',
            port: 6379,
            db: 0,
            username: 'username',
            password: 'secret',
            // @see https://github.com/luin/ioredis#tls-options
            tls: {
              ca: readFileSync('cert.pem'),
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
