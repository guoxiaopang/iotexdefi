import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Center, Container, Flex, Heading, Text, Image, useMediaQuery, Link } from '@chakra-ui/react';
import { Dash } from '@/components/Dash';
import { NETWORK_CONFIG, setupNetwork } from '@/utils/wallet';
import { useStore } from '@/store/index';
import cardHeaderBg from '@/assets/imgs/card_header.png';
import iotexLogo from '@/assets/imgs/iotex.png';
import metamaskLogo from '@/assets/imgs/metamask_logo.png';
import mainnetLogo from '@/assets/imgs/mainnet.png';
import testnetLogo from '@/assets/imgs/testnet.png';
import iotxLogo from '@/assets/imgs/iotx.png';
import metxLogo from '@/assets/imgs/meta.png';
import sdiLogo from '@/assets/imgs/sdi.png';
import cycLogo from '@/assets/imgs/cyc.png';
import vitaLogo from '@/assets/imgs/vita.png';
import upLogo from '@/assets/imgs/up.png';

const leftDashlist = [
  [100, 54],
  [153, 36],
  [108, 36],
  [27, 135],
  [90, 90],
  [72, 72],
  [72, 144]
];

export const Home = observer(() => {
  const { lang } = useStore();
  const list = [
    { title: lang.t('add_iotx'), logo: iotxLogo },
    { title: lang.t('add_metx'), logo: metxLogo },
    { title: lang.t('add_sdi'), logo: sdiLogo },
    { title: lang.t('add_cyc'), logo: cycLogo },
    { title: lang.t('add_vita'), logo: vitaLogo },
    { title: lang.t('add_up'), logo: upLogo }
  ];
  const [isLargerThanMobile] = useMediaQuery('(min-width: 480px)');

  const setupMainNetwork = async () => {
    await setupNetwork(NETWORK_CONFIG.MAINNET);
  };

  const setupTestNetwork = async () => {
    await setupNetwork(NETWORK_CONFIG.TESTNET);
  };

  return (
    <Container maxW="684px" px="0" py="20px">

      <Container maxW="684px">
        <Box mt={{ base: 12, md: 10 }} mb="8">
          <Center>
            <Heading fontWeight="600" fontSize={{ base: '38px', sm: '40px' }} fontFamily="IBMPlexSansMedium">
              {lang.t('home_title')}
            </Heading>
          </Center>
        </Box>

        <Box position="absolute" left="0" top="30%" display={{ base: 'none', lg: 'block' }}>
          {leftDashlist.map((i, index) => {
            return (
              <Flex mt="10" key={index}>
                {i.map((subI, subIndex) => {
                  return <Dash mr="2" key={subIndex} width={subI + 'px'} />;
                })}
              </Flex>
            );
          })}
        </Box>

        <Box position="absolute" right="0" top="30%" display={{ base: 'none', lg: 'block' }}>
          {leftDashlist.reverse().map((i, index) => {
            return (
              <Flex direction="row-reverse" mt="10" key={index}>
                {i.map((subI, subIndex) => {
                  return <Dash ml="2" key={subIndex} width={subI + 'px'} />;
                })}
              </Flex>
            );
          })}
        </Box>

        <Box
          boxShadow="0px 10px 20px rgb(222 222 222 / 60%)"
          fontFamily="IBMPlexSansMedium"
          borderRadius="30px"
          minH={482}
          justifyContent={'center'}
          borderColor={'black'}
        >
          <Box h="81px" borderTopLeftRadius="30px" borderTopRightRadius="30px" background={`url('${cardHeaderBg}')`} backgroundSize="100% 100%">
            <Flex pt="5" pl="8">
              <Image width="48px" src={iotexLogo} />
              <Text lineHeight="46px" ml="5" color="#fff" fontSize="22px" fontWeight="700">
                {lang.t('iotex_network')}
              </Text>
            </Flex>
          </Box>

          <Flex pl={{ base: 0, sm: 8 }} pt={{ base: 4, sm: 10 }} justifyContent={{ base: 'center', sm: 'flex-start' }}>
            <Image width="48px" src={metamaskLogo} display={{ base: 'none', sm: 'block' }} />
            <Text ml={{ base: 0, sm: 6 }} fontWeight="600" fontSize="20px" size={'18px'} mt={2}>
              {lang.t('home_desc')}
            </Text>
          </Flex>

          <Box mt={{ base: 8, sm: 16 }}>
            <Flex justifyContent="space-around" alignItems="center" direction={{ base: 'column', sm: 'row' }}>
              <Box ml={{ base: 0, sm: 10 }}>
                <Flex flexDirection="row">
                  <Image width="40px" src={mainnetLogo} />
                  <Button fontWeight="500" size={'md'} onClick={setupMainNetwork} variant="ghost">
                    {lang.t('add_network')}
                  </Button>
                </Flex>
                <Flex mt="8">
                  <Image width="40px" src={testnetLogo} />
                  <Button fontWeight="500" size={'md'} onClick={setupTestNetwork} variant="ghost">
                    {lang.t('add_testnet')}
                  </Button>
                </Flex>
              </Box>

              <Box mr={{ base: 0, sm: 10 }}>
                <Flex flexWrap="wrap" width={{ base: '270px', sm: '200px' }}>
                  {list.map((i, index) => {
                    return isLargerThanMobile ? (
                      <Flex key={index} ml={index % 2 === 1 ? '30px' : 0} mt={index > 1 ? '30px' : 0}>
                        <Image width="40px" height="40px" src={i.logo} />
                        <Text ml="1" width="40px" fontWeight="500" fontSize="14px">
                          {i.title}
                        </Text>
                      </Flex>
                    ) : (
                      <Flex key={index} mt={'30px'} ml={index % 4 !== 0 ? '30px' : 0} direction="column">
                        <Image width="40px" height="40px" src={i.logo} />
                        <Text ml="1" width="40px" fontWeight="500" fontSize="14px">
                          {i.title.replace('Add', '')}
                        </Text>
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>

      <Container maxW="684px" mt="60px">
        <Box position="absolute" left="0" top="30%" display={{ base: 'none', lg: 'block' }}>
          {leftDashlist.map((i, index) => {
            return (
              <Flex mt="10" key={index}>
                {i.map((subI, subIndex) => {
                  return <Dash mr="2" key={subIndex} width={subI + 'px'} />;
                })}
              </Flex>
            );
          })}
        </Box>

        <Box position="absolute" right="0" top="30%" display={{ base: 'none', lg: 'block' }}>
          {leftDashlist.reverse().map((i, index) => {
            return (
              <Flex direction="row-reverse" mt="10" key={index}>
                {i.map((subI, subIndex) => {
                  return <Dash ml="2" key={subIndex} width={subI + 'px'} />;
                })}
              </Flex>
            );
          })}
        </Box>


        <Box
          boxShadow="0px 10px 20px rgb(222 222 222 / 60%)"
          fontFamily="IBMPlexSansMedium"
          borderRadius="30px"
          minH={482}
          justifyContent={'center'}
          borderColor={'black'}
        >
          <Box h="81px" borderTopLeftRadius="30px" borderTopRightRadius="30px" background={`url('${cardHeaderBg}')`} backgroundSize="100% 100%">
            <Flex pt="5" pl="8">
              <Image width="48px" src={iotexLogo} />
              <Text lineHeight="46px" ml="5" color="#fff" fontSize="22px" fontWeight="700">
                {lang.t('iopay')}
              </Text>
            </Flex>
          </Box>

          <Box ml={{ base: 8, sm: 16 }} mt={{ base: 4, sm: 8 }} fontFamily="IBMPlexSansMedium">
            <Button
              color="white"
              borderRadius="10rem"
              fontSize="1rem"
              bg="#3DDCCD"
              h="2rem"
              mt="1.5rem"
              css={{
                width: "12rem"
              }}
              onClick={() => {
                window.location.href="iopay://browser_enable"
              }}>
              {lang.t('home_enable_discover')}
            </Button>
            <Button
              variant="outline"
              color="#3DDCCD"
              fontSize="1rem"
              h="2rem"
              borderColor="#3DDCCD"
              mt="1.5rem"
              ml={{ base: 0, sm: "1rem" }}
              borderRadius="10rem"
              css={{
                width: "12rem"
              }}
              onClick={() => {
                window.location.href="iopay://browser_disable"
              }}>
              {lang.t('home_disable_discover')}
            </Button>
          </Box>
        </Box>


      </Container>

    </Container>
  );
});
