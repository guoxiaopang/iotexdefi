import { TokenState } from '@/store/lib/TokenState';
import { ChainState } from '../store/lib/ChainState';

export const IotexMainnetConfig = new ChainState({
  name: 'IoTeX',
  chainId: 4689,
  rpcUrl: 'https://api.iotex.one:443',
  explorerURL: 'https://iotexscan.io',
  explorerName: 'IotexScan',
  info: {
    blockPerSeconds: 5
  },
  Coin: new TokenState({
    symbol: 'IOTX',
    decimals: 18
  })
});
