import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/ui/Dashboard";
import WalletConnect from "./components/ui/WalletConnect";
import GoldPrice from "./components/ui/GoldPrice";
import IslamicSharia from "./components/ui/IslamicSharia";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NFTMint from "./pages/NFTMint";
import InvestorDashboard from "./pages/InvestorDashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">GoldChain Blockchain Demo</h1>

        {/* Wallet Connect */}
        <WalletConnect />

        {/* Real-time Gold Price */}
        <GoldPrice />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/nft-mint" element={<NFTMint />} />
          <Route path="/investor" element={<InvestorDashboard />} />
        </Routes>

        {/* Islamic Sharia */}
        <IslamicSharia />
      </div>
    </Router>
  );
}
