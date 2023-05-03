import GetBalance from "./GetBalanceOfWallet"
import GetBalanceOfTokens from "./GetBalanceOfTokens"
import ChainChangedHandler from "./ChainChangedHandler"
import DisconnectWallet from '../DisconnectWallet/DisconnectWallet';


function ConnectWallet() {

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // setWalletAddress(accounts[0]);
        localStorage.setItem("walletAddress", accounts[0]);

        //Get the connect button and update its text
        const connectButton = document.getElementById("connect_button");
        if (connectButton) {
          const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
          connectButton.textContent = `Connected: ${shortAddress}`;
        }
        //Get balance and update text near the wallet button
        GetBalance(accounts[0]);
        GetBalanceOfTokens();

        window.ethereum.on("accountChanged", () => {
          // Remove token from the Local Storage
          localStorage.removeItem("walletAddress");
          // Reconnect with new account of MetaMask, geting new address
          connectWallet();
        });

        window.ethereum.on("chainChanged", ChainChangedHandler);

        // When user disconnect wallet or web-page in the wallet
        window.ethereum.on("disconnect", () => {
          // Call to function of disconnecting the Wallet, delete the address and disconnection the user
          DisconnectWallet();
        })

      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      const div = document.querySelector('#metamask');
      if (div) {
        div.textContent = 'Please install MetaMask';
      }
      console.log("Please install MetaMask");
    }
  };
  connectWallet();
}
export default ConnectWallet