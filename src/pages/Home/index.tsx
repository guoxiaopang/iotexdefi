import React from 'react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { CHAIN_ID, RPC_URL, setupNetwork } from '@/utils/wallet';

export const Home = observer(() => {

  const setupMainNetwork=async ()=>{
    await setupNetwork(CHAIN_ID.MAINNET, RPC_URL.MAINNET)
  }

  const setupTestNetwork= async ()=>{
    await setupNetwork(CHAIN_ID.TESTNET, RPC_URL.TESTNET)
  }

  return (
    <Container maxW='7xl' p={5}>
      <Box>
        <Center>
          <Heading>IoTeX Defi List</Heading>
        </Center>
      </Box>
      <Box h='40px' mt={6}>
        <Text>IoTeX Network</Text>
      </Box>
      <Box borderWidth='1px' display={'flex'} flexDirection={'column'} mt={3} minH={500} justifyContent={'center'}
           borderColor={'black'}>
        <Box>
          <Center>
            <Text size={'18px'} mt={2}>Add IoTex network to Metamask</Text>
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
