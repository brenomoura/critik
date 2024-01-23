import { Group, Badge, Space, Grid, Input, Text, em } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Copyright, Bell, EnvelopeSimple } from '@phosphor-icons/react'

import classes from './SearchBar.module.css';
import StyledLink from './StyledLink';
import { useState } from 'react';
import ProductSearchModal from '../search/modal/ProductSearchResultsModal';
import { useMediaQuery } from '@mantine/hooks';


const SearchBar = () => {
  let notificationBadge = true
  let privateMessageBadge = true
  const [productSearchResultsModalOpened, setProductSearchResultsModalOpened] = useState<boolean>(false);
  const isMobile = useMediaQuery(`(max-width: ${em(390)})`);

  return (
    <>
      <header className={classes.header}>
        <Space h={"md"} />
        <Grid gutter="xs">
          <Grid.Col span="auto">
            <StyledLink to={`/`}>
              <Copyright size={32} />
            </StyledLink>
          </Grid.Col>
          <Grid.Col span="auto">
            <Input
              leftSection={<IconSearch style={{ width: em(16), height: em(16) }} stroke={1.5} />}
              onClick={() => setProductSearchResultsModalOpened(true)}
              // miw={80}
              component="button"
              pointer
            >
              <Text c="dimmed">
                Search
              </Text>

            </Input>
          </Grid.Col>
          <Grid.Col span={isMobile ? "content" : "auto"}>
            <Group justify='right'>
              <Group gap={8}>
                <Bell weight='fill' size={em(24)} display={notificationBadge ? 'none' : ''} />
                <Badge display={notificationBadge ? '' : 'none'} py={15} leftSection={<Bell weight='fill' size={em(24)} />}>10</Badge>
                <EnvelopeSimple display={privateMessageBadge ? 'none' : ''} weight='fill' size={em(24)} />
                <Badge display={privateMessageBadge ? '' : 'none'} py={15} leftSection={<EnvelopeSimple weight='fill' size={em(24)} />}>7</Badge>
              </Group>
            </Group>
          </Grid.Col>
        </Grid>
      </header>
      <ProductSearchModal
        opened={productSearchResultsModalOpened}
        setOpened={setProductSearchResultsModalOpened}
      />
    </>
  );
}

export default SearchBar