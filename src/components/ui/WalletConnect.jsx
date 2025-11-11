import React, { useState } from "react";
import { PeraWalletConnect } from "@perawallet/connect";

const peraWallet = new PeraWalletConnect();

export default function WalletConnect() {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      setAddress(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mb-6 text-center">
      {address ? (
        <p className="text-green-600">Connected: {address}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Connect Pera Wallet
        </button>
      )}
    </div>
  );
}

