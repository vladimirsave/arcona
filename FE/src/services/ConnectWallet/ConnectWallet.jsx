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
        console.log(accounts[0]);

        //Get the connect button and update its text
        const connectButton = document.getElementById("connect_button");
        if (connectButton) {
          const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
          connectButton.textContent = `Connected: ${shortAddress}`;
        }

      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };
  connectWallet();
}
export default ConnectWallet