export const  NETWORK_CONFIG={
  'MAINNET':{
    chainName:'IoTeX Network',
    currencyName:'IOTX',
    chainId:4689,
    rpcUrl:'https://babel-api.mainnet.iotex.io/',
    explorerUrl:'https://iotexscan.io/',
  },
  'TESTNET':{
    chainName:'IoTeX Testnet',
    currencyName: 'IOTX',
    chainId:4690,
    rpcUrl:'https://babel-api.testnet.iotex.io',
    explorerUrl:'https://testnet.iotex.io/'
  }
}

export const setupNetwork = async (config) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const provider = window.ethereum
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${config.chainId.toString(16)}`,
            chainName: config.chainName,
            nativeCurrency: {
              name: config.currencyName,
              symbol: 'IOTX',
              decimals: 18,
            },
            rpcUrls: [config.rpcUrl],
            blockExplorerUrls: [config.explorerUrl],
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
