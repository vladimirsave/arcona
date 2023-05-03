import './style.css';
import { ethers } from 'ethers';
import abi from './ardl.json';
import logoCoin from "../../assets/pngs/logo.png";



async function GetBalanceOfTokens() {
  if (typeof window.ethereum === 'undefined') {
    console.log('MetaMask is not installed.');
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = '0x0f71B8De197A1C84d31de0F1fA7926c365F052B3';
  // const contractAddress = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB';
  const tokenAddress = window.ethereum.selectedAddress;
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const balance = await contract.balanceOf(tokenAddress);

  const balanceElement = document.getElementById('balance_arcona');
  if (balance.isZero()) {
    balanceElement.textContent = "There are no coins in the wallet";
    return;
  }
  const balanceInEther = parseFloat(ethers.utils.formatEther(balance));
  balanceElement.innerHTML = `
  <div class="balance-container">
    <button class="header-btn light-grey-hover"><img src="${logoCoin}" class="coin-logo" /></button>
    <span class="balance-text">Balance of Arcona Token:</span>
    <span class="balance-amount">${balanceInEther} ARCONA</span>
  </div>
`;


 }

export default GetBalanceOfTokens;
