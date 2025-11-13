import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import WalletConnectButton from '../shared/WalletConnectButton';
import Dashboard from '../components/ui/Dashboard';
import { getGoldPrice } from '../utils/goldPrice';

const InvestorDashboard = () => {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      const price = await getGoldPrice();
      setGoldPrice(price);
    }
    fetchPrice();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Investor Dashboard</h2>
        {goldPrice && (
          <p className="mb-4">Current Gold Price: ${goldPrice}</p>
        )}
        <Dashboard />
        <WalletConnectButton />
      </section>
    </div>
  );
};

export default InvestorDashboard;
