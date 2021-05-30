import React from 'react';
import { HStack, Divider, Flex, BoxProps, Text, Button, Box } from '@chakra-ui/react';
import { observer, useObserver, useLocalStore } from 'mobx-react-lite';
import { useStore } from '../../store/index';
import { helper } from '../../lib/helper';
import { ETH, BNB, IOTX } from 'ccy-icons';

export const links = [
  { label: 'iotex_network', href: '' },
  { label: 'maskplus', href: '' },
  { label: 'mimo', href: '' },
  { label: 'ioTube', href: '' },
  { label: 'earn_iotx', href: '' }
];

export const Nav = observer((props: BoxProps) => {
  const { god, lang } = useStore();

  const store = useLocalStore(() => ({
    showConnecter() {
      god.setShowConnecter(true);
    },

    showWalletInfo() {
      god.currentNetwork.walletInfo.visible = true;
    }
  }));
  const NetowrkIcon = useObserver(() => {
    if (god.network.currentId.value == 'iotex') {
      return <IOTX />;
    }
    if (god.network.currentId.value == 'eth') {
      return <ETH />;
    }
    if (god.network.currentId.value == 'bsc') {
      return <BNB />;
    }
  });

  const accountView = useObserver(() => {
    if (!god.currentNetwork.account) {
      return <Button onClick={store.showConnecter}>{lang.t('connect.wallet')}</Button>;
    }
    return <Button onClick={store.showWalletInfo}>{helper.string.truncate(god.currentNetwork.account, 12, '...')}</Button>;
  });
  return (
    <HStack spacing={4} {...props}>
      {links.map((i, index) => (
        <Flex key={index} height="30px" flexDirection="row">
          <Button fontFamily="IBMPlexSansMedium" fontWeight="500" fontSize="16px" color="#1B1B24" variant="link">
            {/* @ts-ignore */}
            {lang.t(i.label)}
          </Button>
          {index < links.length - 1 ? (
            <Divider height="13px" mt="9px" opacity="1" borderWidth="1px" borderColor="#1B1B24" ml="6" mr="2" orientation="vertical" />
          ) : null}
        </Flex>
      ))}
    </HStack>
  );
});
