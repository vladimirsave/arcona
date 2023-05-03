import { configureChains, createClient } from "@wagmi/core";
import { arbitrum, avalanche, mainnet, polygon } from "@wagmi/core/chains";
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
// import { Web3Button } from '@web3modal/react'

// 1. Define constants
const projectId = "95ac782fcd4038eed1ad06004e90cb7b";
const chains = [mainnet, polygon, avalanche, arbitrum];

// 2. Configure wagmi client
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ chains, version: 1, projectId }),
  provider,
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiClient, chains);

export const web3Modal = new Web3Modal(
  {
    projectId,
    themeVariables: {
      '--w3m-z-index': '1500',
      '--w3m-button-border-radius': '2rem',
      "--w3m-accent-color": "#FFFFFF",
      '--w3m-button-width': '50rem',
      '--w3m-button-height': '10rem',
      '--w3m-accent-fill-color' : '#000000'
    }
  },
  ethereumClient
);

export function ConnectWalletConnect() {
  return { ConnectWalletConnect, web3Modal };
}
