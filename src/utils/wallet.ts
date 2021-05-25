
export enum CHAIN_ID {
  'MAINNET' = 4689,
  'TESTNET' = 4690
}

export enum RPC_URL {
  'MAINNET' = 'https://babel-api.mainnet.iotex.io',
  'TESTNET' = 'https://babel-api.testnet.iotex.io/'
}

export const setupNetwork = async (chainId:CHAIN_ID,rpcUrl:RPC_URL) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const provider = window.ethereum
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            rpcUrls: [rpcUrl],
            blockExplorerUrls: ['https://bscscan.com/'],
          },
        ],
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}

export default null
