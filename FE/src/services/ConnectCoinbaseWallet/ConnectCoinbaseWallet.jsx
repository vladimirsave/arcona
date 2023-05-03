import { useCoinbaseWallet } from "@thirdweb-dev/react";

function ConnectCoinbaseWallet() {
  const connectWithCoinbase = useCoinbaseWallet();

  return (
    <button onClick={() => connectWithCoinbase()}>Connect Coinbase</button>
  );
}

export default ConnectCoinbaseWallet