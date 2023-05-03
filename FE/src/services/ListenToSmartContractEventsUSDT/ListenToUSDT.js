require("dotenv").config();
const { ethers, providers } = require("ethers");
const ardlABI = require("./ardl.json");

// import {Contract, providers, ContractInterface} from "ethers";

async function main() {
  const ardlAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  console.log("ALCHEMY_WEBSOCKET value:", process.env.ALCHEMY_WEBSOCKET);
  console.log(ethers.WebSocketProvider);

  try {

    // const provider = new ethers.WebSocketProvider(
    const provider = new ethers.providers.WebSocketProvider(
      `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET}`
    );
    console.log('HEre1')
    console.log('HEre1_1')
    const contract = new ethers.Contract(ardlAddress, ardlABI, provider);
    console.log('HEre2')
    console.log('DONE')
    contract.on("Transfer", (from, to, tokenId, event) => {
      console.log('HEre2_1')
      let info = {
        from: from,
        to: to,
        tokenId: tokenId,
        data: event,
      };
      console.log('HEre3')
      console.log(info);
      console.log('HEre4')
    });
  } catch (error) {
    console.error(error);
  }
}

main();



// const ethers = require("ethers");
// const ardlABI = require("./ardl.json");
// require("dotenv").config();

// async function main() {
//     const ardlAddress = "0xdF5d68D54433661b1e5e90a547237fFB0AdF6EC2";
//     const provider = new ethers.provider.WebSocketProvider(
//         `wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_WEBSOCKET}`
//     );

//     const contract = new ethers.Contract(ardlAddres, ardlABI, provider);

//     contract.on("Transfer", (from, to, value, event) => {
//         let info = {
//             from: from,
//             to: to,
//             value: ethers.utils.formatUnits(value, 6),
//             data: event,
//         };
//         console.log(JSON.stringify(info, null, 4));
//     });
// }

// main();