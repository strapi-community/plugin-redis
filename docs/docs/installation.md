---
sidebar_label: 'Installation'
slug: '/installation'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

As of plugin version 2.0.0+, the plugin package name has changed to `@strapi-community/plugin-redis`.
This change was made to align with the naming convention of official Strapi plugins.

As such the following table outlines the plugin versions vs the Strapi versions they are compatible with:

| Strapi Version | Plugin Version |
|----------------|----------------|
| 5.x.x          | 2.x.x          |
| 4.x.x          | 1.x.x          |
| 3.x.x          | N/A            |

## Installation for Strapi 5.x.x

To install the plugin, run the following command:

<Tabs groupId="install">
  <TabItem value="yarn" label="Yarn">

```bash
yarn add @strapi-community/plugin-redis
```

  </TabItem>
  <TabItem value="npm" label="NPM">

```bash
npm install @strapi-community/plugin-redis --save
```

  </TabItem>
</Tabs>

## Installation for Strapi 4.x.x

To install the plugin, run the following command:

<Tabs groupId="install">
  <TabItem value="yarn" label="Yarn">

```bash
yarn add strapi-plugin-redis
```

  </TabItem>
  <TabItem value="npm" label="NPM">

```bash
npm install strapi-plugin-redis --save
```

  </TabItem>
</Tabs>
