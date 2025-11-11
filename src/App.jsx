import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/ui/Dashboard";
import WalletConnect from "./components/ui/WalletConnect";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NFTMint from "./pages/NFTMint";
import InvestorDashboard from "./pages/InvestorDashboard";
import Blog from "./components/ui/Blog";
import GoldPrice from "./components/ui/GoldPrice";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">GoldChain Blockchain Demo</h1>

        {/* Wallet Connect */}
        <WalletConnect />

        {/* Real-Time Gold Price */}
        <GoldPrice />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/nft-mint" element={<NFTMint />} />
          <Route path="/investor" element={<InvestorDashboard />} />
        </Routes>

        {/* Blogs */}
        <Blog />
      </div>
    </Router>
  );
}
