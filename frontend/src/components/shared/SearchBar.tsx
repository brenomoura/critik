import { Autocomplete, Group, rem, Badge, Center, Space, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { Copyright, Bell, EnvelopeSimple } from '@phosphor-icons/react'

import classes from './SearchBar.module.css';
import { useNavigate } from 'react-router-dom';
import StyledLink from './StyledLink';


const SearchBar = () => {
  const navigate = useNavigate();

  const [opened, { toggle }] = useDisclosure(false);
  let notificationBadge = true
  let privateMessageBadge = false


  return (
    <header className={classes.header}>
      <Space h={"md"} />
      <Grid>
        <Grid.Col span={4}>
          <StyledLink to={`/`}>
            <Copyright size={32} />
          </StyledLink>
        </Grid.Col>
        <Grid.Col span={4}>
          <Autocomplete
            placeholder="Search for a product..."
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            miw={100}
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
  );
}

export default SearchBar