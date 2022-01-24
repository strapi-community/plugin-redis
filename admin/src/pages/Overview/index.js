import React from 'react';

// Strapi Parts
// import { ContentLayout, HeaderLayout } from '@strapi/design-system/Layout';
import { Main } from '@strapi/design-system/Main';
import { ContentLayout } from '@strapi/design-system/Layout';
import { Stack } from '@strapi/design-system/Stack';
import { Box } from '@strapi/design-system/Box';
// import { Button } from '@strapi/design-system/Button';
// import { Box } from '@strapi/design-system/Box';
// import { Stack } from '@strapi/design-system/Stack';
// import { Typography } from '@strapi/design-system/Typography';
// import { ToggleInput } from '@strapi/design-system/ToggleInput';
// import { TextInput } from '@strapi/design-system/TextInput';
// import { Grid, GridItem } from '@strapi/design-system/Grid';

import OverviewHeader from '../../components/OverviewHeader';
import OverviewConfig from '../../components/OverviewConfig';

// import permissions from '../../permissions';

let config = {};

const Overview = () => {
  return (
    <Main>
      <OverviewHeader />
      <Stack size={7}>
        <ContentLayout>
          <Box
            background="neutral0"
            hasRadius
            shadow="filterShadow"
            paddingTop={6}
            paddingBottom={6}
            paddingLeft={7}
            paddingRight={7}
          >
            <OverviewConfig config={config} />
          </Box>
        </ContentLayout>
      </Stack>
    </Main>
  );
};

export default Overview;
