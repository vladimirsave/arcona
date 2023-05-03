import { ethers } from 'ethers';
// const {utils, BigNumber} = require('ethers');

function GetBalance(accountAddress) {
  const getUserBalance = () => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [String(accountAddress), "latest"] })
      .then((balance) => {
        const balanceInWei = ethers.BigNumber.from(balance);
        const balanceInEth = ethers.utils.formatEther(balanceInWei);

        // Update balance information on page
        const balanceElement = document.getElementById("balance");
        if (balanceElement) {
          balanceElement.textContent = `Balance: ${balanceInEth} ETH`;
        }
      });
  };
  getUserBalance();
  // Add event listener for chain changes
  window.ethereum.on("chainChanged", () => {
    // Reload page to update network information
    window.location.reload();
  });
}

export default GetBalance;


