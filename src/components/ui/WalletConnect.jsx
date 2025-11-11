import React from "react";
import { PeraWalletConnect } from "@perawallet/connect";

export default function WalletConnect({ setWalletAddress }) {
  const peraWallet = new PeraWalletConnect();

  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      if (accounts.length > 0) setWalletAddress(accounts[0]);
    } catch (err) {
      console.log("Wallet connect failed:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Connect Pera Wallet</h2>
      <button
        onClick={connectWallet}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Connect Wallet
      </button>
    </div>
  );
}
