// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'best-practices',
    },
    {
      type: 'doc',
      id: 'faq',
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'redis/intro',
        'redis/basic',
        'redis/sentinel',
        'redis/tls-auth',
        'redis/cluster',
        'redis/redlock',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Plugins',
      items: ['plugins/rest-cache'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/intro', 'api/client', 'api/config', 'api/connections'],
    },
  ],
};

export default sidebars;
