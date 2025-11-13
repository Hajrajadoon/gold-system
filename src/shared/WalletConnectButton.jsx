import React, { useState } from 'react';
import { PeraWalletConnect } from '@perawallet/connect';

const peraWallet = new PeraWalletConnect();

function WalletConnectButton() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    try {
      const newAccounts = await peraWallet.connect();
      setAccount(newAccounts[0]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      onClick={connectWallet}
      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
    >
      {account ? `Connected: ${account.slice(0,6)}...` : 'Connect Pera Wallet'}
    </button>
  );
}

export default WalletConnectButton;
