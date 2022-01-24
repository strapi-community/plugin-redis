import React from 'react';
import { useIntl } from 'react-intl';
import { Stack } from '@strapi/design-system/Stack';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { Divider } from '@strapi/design-system/Divider';
import { Typography } from '@strapi/design-system/Typography';
import { TextInput } from '@strapi/design-system/TextInput';
import { ToggleInput } from '@strapi/design-system/ToggleInput';
import getTrad from '../../utils/getTrad';

const OverviewConfig = ({ config }) => {
  const { formatMessage } = useIntl();

  return (
    <Stack size={4}>
      <Stack size={1}>
        <Typography variant="delta" as="h2">
          {formatMessage({
            id: getTrad('Settings.redis.plugin.title.config'),
            defaultMessage: 'Configuration',
          })}
        </Typography>
        <Typography>
          {formatMessage(
            {
              id: getTrad('Settings.redis.plugin.text.configuration'),
              defaultMessage:
                'The plugin is configured through the {file} file, checkout this {link} for the reference.',
            },
            {
              file: './config/plugins.js',
              link: (
                <a
                  href="https://github.com/strapi-community/strapi-plugin-redis#-configuration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              ),
            }
          )}
        </Typography>
      </Stack>
      <Divider unsetMargin={false} />
      <Typography variant="delta" as="h2">
          {formatMessage({
            id: getTrad('Settings.redis.plugin.title.db.config'),
            defaultMessage: 'Database Configuration',
          })}
      </Typography>
      <Grid gap={5}>
        <GridItem col={3} s={6}>
          <TextInput
            name="total-connections"
            label={formatMessage({
              id: getTrad('Settings.redis.plugin.label.totalConnections'),
              defaultMessage: 'Total Redis Databases',
            })}
            placeholder={formatMessage({
              id: getTrad('Settings.redis.plugin.placeholder.totalConnections'),
              defaultMessage: `1`,
            })}
            disabled
            onChange={() => {}}
            value={2}
          />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default OverviewConfig;
