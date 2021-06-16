import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Center, Container, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { Dash } from '@/components/Dash';
import { useStore } from '@/store/index';
import cardHeaderBg from '@/assets/imgs/card_header.png';
import iotexLogo from '@/assets/imgs/iotex.png';

const leftDashlist = [
  [100, 54],
  [153, 36],
  [108, 36],
  [27, 135],
  [90, 90],
  [72, 72],
  [72, 144]
];

export const Iopay = observer(() => {
  const { lang } = useStore();

  return (
    <Container maxW="684px">
      <Box mt={{ base: 12, md: 10 }} mb="8">
        <Center>
          <Heading fontWeight="600" fontSize={{ base: '38px', sm: '40px' }} fontFamily="IBMPlexSansMedium">
            {lang.t('iopay')}
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

        <Box ml={{ base: 8, sm: 16 }} mt={{ base: 4, sm: 8 }} fontFamily="IBMPlexSansMedium">
          <Button
            color="white"
            borderRadius="10rem"
            fontSize="1rem"
            bg="#3DDCCD"
            h="2rem"
            mt="1.5rem"
            w="12rem"
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
            w="12rem"
            spacing="2rem"
            borderColor="#3DDCCD"
            mt="1.5rem"
            ml={{ base: 0, sm: "1rem" }}
            borderRadius="10rem"
            onClick={() => {
              window.location.href="iopay://browser_disable"
            }}>
            {lang.t('home_disable_discover')}
          </Button>
        </Box>
      </Box>


    </Container>
  );
});
