import React from "react";

async function DisconnectWallet() {
  // const navigate = useNavigate();
  try {
    // Deleting token in Local Storage if exists
    if (localStorage.getItem("walletAddress")) {
      localStorage.removeItem("walletAddress");
    }

    // Disconnection of MetaMask
    await window.ethereum.request({ method: "eth_requestAccounts" });

    //Get the connect button and update its text
    const connectButton = document.getElementById("connect_button");
    if (connectButton) {
      connectButton.textContent = `Connect wallet`;
    }
    // Update balance information on page
    const balanceElement = document.getElementById("balance");
    if (balanceElement) {
      balanceElement.textContent = ` `;
    }

  } catch (error) {
    console.error(error);
    // Additional error handling logic here
  }
}

export default DisconnectWallet;


// async function DisconnectWallet() {
//   // const navigate = useNavigate();
//   try {
//     // Deleting token in Local Storage
//     await    localStorage.removeItem("walletAddress");

//     // Disconnection of MetaMask
//     await window.ethereum.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] });

//     //Get the connect button and update its text
//     const connectButton = document.getElementById("connect_button");
//     if (connectButton) {
//       connectButton.textContent = `Connect wallet`;
//     }
//     // Update balance information on page
//     const balanceElement = document.getElementById("balance");
//     if (balanceElement) {
//       balanceElement.textContent = ` `;
//     }

//   } catch (error) {
//     console.error(error);
//   }
// };

// export default DisconnectWallet;