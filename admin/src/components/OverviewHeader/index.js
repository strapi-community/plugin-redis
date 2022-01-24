import React from 'react';
import { useIntl } from 'react-intl';
import { SettingsPageTitle } from '@strapi/helper-plugin';
import { HeaderLayout } from '@strapi/design-system/Layout';
import getTrad from '../../utils/getTrad';

const OverviewHeader = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <SettingsPageTitle
        name={formatMessage({
          id: getTrad('Settings.redis.plugin.title'),
          defaultMessage: 'Redis Database Overview',
        })}
      />
      <HeaderLayout
        id="title"
        title={formatMessage({
          id: getTrad('Settings.redis.plugin.title'),
          defaultMessage: 'Redis Database Overview',
        })}
        subtitle={formatMessage({
          id: getTrad('Settings.redis.plugin.subTitle'),
          defaultMessage: 'Shows some information about configured Redis databases',
        })}
      />
    </>
  );
};

export default OverviewHeader;
