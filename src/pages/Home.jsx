import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import WalletConnectButton from '../shared/WalletConnectButton';
import { getGoldPrice } from '../utils/goldPrice'; // utility function to fetch gold price

const Home = () => {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      const price = await getGoldPrice(); // fetches real-time gold price
      setGoldPrice(price);
    }
    fetchPrice();
  }, []);

  return (
    <div>
      <Navbar />
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to GoldChain</h1>
        <p className="mt-2 text-lg">Track real-time gold prices and manage your gold assets.</p>
        {goldPrice && (
          <p className="mt-4 text-xl font-semibold">Current Gold Price: ${goldPrice}</p>
        )}
        <WalletConnectButton />
      </header>
    </div>
  );
};

export default Home;
