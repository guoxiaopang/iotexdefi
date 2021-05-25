import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { NETWORK_CONFIG, setupNetwork } from '@/utils/wallet';

export const Home = observer(() => {

  const setupMainNetwork=async ()=>{
    await setupNetwork(NETWORK_CONFIG.MAINNET)
  }

  const setupTestNetwork= async ()=>{
    await setupNetwork(NETWORK_CONFIG.TESTNET)
  }

  return (
    <Container maxW='7xl' p={5}>
      <Box>
        <Center>
          <Heading>IoTeX DeFi</Heading>
        </Center>
      </Box>
      <Box h='40px' mt={6}>
        <Text>IoTeX Network</Text>
      </Box>
      <Box borderWidth='1px' display={'flex'} flexDirection={'column'} mt={3} minH={500} justifyContent={'center'}
           borderColor={'black'}>
        <Box>
          <Center>
            <Text size={'18px'} mt={2}>Add IoTeX Network to Metamask</Text>
          </Center>
        </Box>
        <Box mt={16}>
          <Flex justifyContent={'space-evenly'}>
            <Button size={'md'} onClick={setupMainNetwork}>Add Mainnet</Button>
            <Button size={'md'} onClick={setupTestNetwork}>Add Testnet</Button>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
});
