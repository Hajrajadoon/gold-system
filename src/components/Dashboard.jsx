import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [goldBalance, setGoldBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [goldPrice, setGoldPrice] = useState(0);

  useEffect(() => {
    setGoldPrice(65.23); // mock price
    setTransactions([
      { id: 1, type: "NFT Mint", amount: "1g", date: "2025-11-11" },
      { id: 2, type: "Gold Buy", amount: "5g", date: "2025-11-10" }
    ]);
    setGoldBalance(10); // mock balance
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Gold Balance</h3>
          <p>{goldBalance} g</p>
          <p>Price: ${goldPrice}/g</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-2">Transactions</h3>
          <ul>
            {transactions.map(tx => (
              <li key={tx.id}>{tx.type}: {tx.amount} ({tx.date})</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

