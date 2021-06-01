import React from 'react';
import { Box, Flex, Container, Image, Stack, useDisclosure, IconButton, useColorModeValue, Icon, useColorMode, Heading } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { MobileNav } from '@/components/Header/MobileNav';
import { observer } from 'mobx-react-lite';
import { WalletInfo } from '../WalletInfo';
import { Nav } from './Nav';
import menuIcon from '@/assets/imgs/menu.png';

export const Header = observer(() => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        as={'header'}
        // pos="fixed"
        // top="0"
        // w={'full'}
        minH={'60px'}
        zIndex="999"
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
        }}
      >
        <Container as={Flex} maxW={'7xl'} align={'center'}>
          {/* <Flex justifyContent="flex-end"  ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={isMobileNavOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex flex={{ base: 1, md: 'auto' }} justify={{ base: 'center', md: 'start' }}>
            <Link to={'/'}>
              <Stack as={'a'} direction={'row'} alignItems={'center'} spacing={{ base: 2, sm: 4 }}>
                <Icon as={Logo} w={{ base: 8 }} h={{ base: 8 }} />
                <Heading as={'h1'} fontSize={'xl'} display={{ base: 'none', md: 'block' }}>
                </Heading>
              </Stack>
            </Link>
          </Flex> */}

          <Stack direction={'row'} align={'center'} spacing={8} flex={{ base: 1, md: 'auto' }} justify={'center'}>
            <Nav />
            {/* <IconButton
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Color Mode'}
              onClick={toggleColorMode}
              icon={colorMode == 'light' ? <IoMoon size={18} /> : <IoSunny size={18} />}
            /> */}
          </Stack>
        </Container>
      </Flex>

      <Image onClick={onToggle} display={{base: 'block', md: 'none'}} src={menuIcon} width="36px" position="absolute" right="12px" top="-36px"/>
      <MobileNav isOpen={isMobileNavOpen} />
      <WalletInfo />
    </Box>
  );
});
