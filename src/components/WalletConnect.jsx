import React, { useState } from "react";
import PeraWalletConnect from "@perawallet/connect";

const peraWallet = new PeraWalletConnect.PeraWalletConnect();

export default function WalletConnect() {
  const [account, setAccount] = useState(null);
  const [optedIn, setOptedIn] = useState(false);
  const ASA_ID = 12345678; // replace with your ASA ID

  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      setAccount(accounts[0]);
      alert("Wallet connected: " + accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const disconnectWallet = async () => {
    peraWallet.disconnect();
    setAccount(null);
    setOptedIn(false);
  };

  const optInASA = () => {
    if (!account) return alert("Connect wallet first!");
    setOptedIn(true);
    alert("Opt-in complete for ASA " + ASA_ID);
  };

  return (
    <div className="mb-6">
      {!account ? (
        <button
          onClick={connectWallet}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Connect Pera Wallet
        </button>
      ) : (
        <div>
          <p className="mb-2">Connected: {account}</p>
          {!optedIn ? (
            <button
              onClick={optInASA}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Opt-in to Gold ASA
            </button>
          ) : (
            <p className="text-green-600 font-semibold">Opt-in complete!</p>
          )}
          <button
            onClick={disconnectWallet}
            className="ml-4 bg-gray-500 text-white px-3 py-1 rounded"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

