---
sidebar_label: 'Redlock'
slug: '/redis/redlock'
---

# Redlock Config

Redlock configuration is fairly easy to get setup and additional details for using it within Strapi's Crontasks is also lightly detailed below.

```javascript
// path ./config/plugins.js

module.exports = {
  redis: {
    config: {
      settings:{
        enableRedlock: true,
        lockDelay: null,
        lockTTL: 5000,
        redlockConfig: {
          driftFactor: 0.01,
          retryCount: 10,
          retryDelay: 200,
          retryJitter: 200,
        },
      },
      connections: {
        //... 
      },
    },
  },
};
```

## Cron Task Example

Adding the bypassRedlock property to your cron job will bypass the redlock logic and allow multiple instances of Strapi to run the same cron job at the same time.

This plugin requires you to use the object format of the cron config. i.e if you are using the rule as the key, you will need to change it to an object with the rule as a property and the key as a unique name. This is because across your Strapi instances, Redis needs to lock onto a key that is the same across all instances.

### Normal Cron Task Example

```javascript
// path ./config/cron-tasks.js

module.exports = {
  myJob: {
    task: ({ strapi }) => {/* Add your own logic here */ },
    bypassRedlock: false, // optional
    options: {
      rule: '0 0 1 * * 1',
    },
  },
};
```

### Bootstrap Example

```javascript
// path ./src/index.js

module.exports = {
  register(/* { Strapi } */) {},
  bootstrap({ strapi }) {
    strapi.cron.add({
      myJob: {
        task: async ({ strapi }) => {
          console.log("hello from bootstrap")
        },
        bypassRedlock: false, // optional
        options: {
          rule: '*/10 * * * * *',
        }
      },
    });
  }
};
```
