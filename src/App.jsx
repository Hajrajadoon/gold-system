import React from "react";
import WalletConnect from "./components/WalletConnect";
import Dashboard from "./components/Dashboard";
import NFTMint from "./components/NFTMint";
import Blogs from "./components/Blogs";

export default function App() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">GoldChain Demo</h1>
      <WalletConnect />
      <Dashboard />
      <NFTMint />
      <Blogs />
    </div>
  );
}

