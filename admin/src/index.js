import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import getTrad from './utils/getTrad';
import pluginPermissions from './permissions';

const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
const { name } = pluginPkg.strapi;

export default {
  register(app) {
    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: { id: getTrad('SettingsNav.section-label'), defaultMessage: 'Redis Plugin' },
      },
      [
        {
          intlLabel: {
            id: getTrad('Settings.redis.plugin.title'),
            defaultMessage: 'Overview',
          },
          id: 'settings',
          to: `/settings/${pluginId}`,
          Component: async () => {
            const component = await import(
              /* webpackChunkName: "redis-settings-page" */ './pages/Overview'
            );

            return component;
          },
          permissions: pluginPermissions['settings'],
        },
      ]
    );
    app.registerPlugin({
      description: pluginDescription,
      id: pluginId,
      initializer: Initializer,
      isReady: true,
      isRequired: pluginPkg.strapi.required || false,
      name,
    });
  },

  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
