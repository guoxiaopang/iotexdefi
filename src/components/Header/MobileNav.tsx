import React from 'react';
import { SyntheticEvent } from 'react';
import { Box, Collapse, Flex, Icon, Link, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { NavItem } from '@/components/Header/navData';
import { links } from './Nav';
import { useStore } from '@/store/index';

interface MobileNavProps {
  isOpen: boolean;
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos="fixed"
      top="50px"
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 50px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
      }}
    >
      {links.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ href, children, label }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  const { lang } = useStore();

  const handleToggle = (e: SyntheticEvent) => {
    if (children) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <Stack spacing={4} onClick={handleToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {/* @ts-ignore */}
          {lang.t(label)}
        </Text>
        {children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
          {children &&
            children.map((child) => (
              <Link href={child.href!} passHref={true}>
                <Link key={child.label} py={2}>
                  {/* @ts-ignore */}
                  {lang.t(child.label)}
                </Link>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
