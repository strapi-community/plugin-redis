---
sidebar_label: 'Connections'
slug: '/api/connections'
---

# API Connections

Access with: `strapi.redis.connections`

For each connection either a normal Redis client is created, or if the cluster setting is enabled and you have properly passed in an array of nodes (and optionally any cluster options) a Redis Cluster client.
