import { Autocomplete, Group, Burger, rem, Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { Copyright, Bell, EnvelopeSimple } from '@phosphor-icons/react'

import classes from './SearchBar.module.css';


const SearchBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  let notificationBadge = true
  let privateMessageBadge = false
  

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Copyright size={32} />
        </Group>
        <Autocomplete
          placeholder="Search for a product..."
          leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          mt={5}
          miw={100}
        />
        <Group>
          <Group ml={50} gap={8}>
            <Bell weight='fill' size={24} display={notificationBadge ? 'none' : ''} />
            <Badge display={notificationBadge ? '' : 'none'} py={15} leftSection={<Bell weight='fill' size={24} />}>10</Badge>
            <EnvelopeSimple display={privateMessageBadge ? 'none' : ''} weight='fill' size={24} />
            <Badge display={privateMessageBadge ? '' : 'none'} py={15} leftSection={<EnvelopeSimple weight='fill' size={24} />}>7</Badge>
          </Group>
        </Group>
      </div>
    </header>
  );
}

export default SearchBar