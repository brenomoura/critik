import { Group, rem, Badge, Space, Grid, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Copyright, Bell, EnvelopeSimple } from '@phosphor-icons/react'

import classes from './SearchBar.module.css';
import StyledLink from './StyledLink';
import { useState } from 'react';
import ProductSearchModal from '../search/modal/ProductSearchResultsModal';


const SearchBar = () => {
  let notificationBadge = true
  let privateMessageBadge = false
  const [productSearchResultsModalOpened, setProductSearchResultsModalOpened] = useState<boolean>(false);


  return (
    <>
      <header className={classes.header}>
        <Space h={"md"} />
        <Grid>
          <Grid.Col span={4}>
            <StyledLink to={`/`}>
              <Copyright size={32} />
            </StyledLink>
          </Grid.Col>
          <Grid.Col span={4}>
            <Input
              placeholder="Search a product..."
              leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              onClick={() => setProductSearchResultsModalOpened(true)}
              miw={250}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Group justify='right'>
              <Group gap={8}>
                <Bell weight='fill' size={24} display={notificationBadge ? 'none' : ''} />
                <Badge display={notificationBadge ? '' : 'none'} py={15} leftSection={<Bell weight='fill' size={24} />}>10</Badge>
                <EnvelopeSimple display={privateMessageBadge ? 'none' : ''} weight='fill' size={24} />
                <Badge display={privateMessageBadge ? '' : 'none'} py={15} leftSection={<EnvelopeSimple weight='fill' size={24} />}>7</Badge>
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