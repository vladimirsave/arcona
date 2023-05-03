import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "fvZUuK7qIc0ot0R4mcsYzAbT-AjKbpHg",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);