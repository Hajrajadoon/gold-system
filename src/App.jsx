import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components/pages
import WalletConnect from "./components/ui/WalletConnect";
import GoldPrice from "./components/ui/GoldPrice";
import Dashboard from "./components/ui/Dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NFTMint from "./pages/NFTMint";
import InvestorDashboard from "./pages/InvestorDashboard";
import Blog from "./components/ui/Blog";
import IslamicSharia from "./components/ui/IslamicSharia";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">GoldChain Blockchain Demo</h1>

        {/* Wallet Connect */}
        <div className="mb-6">
          <WalletConnect />
        </div>

        {/* Real-Time Gold Price */}
        <div className="mb-6">
          <GoldPrice />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/nft-mint" element={<NFTMint />} />
          <Route path="/investor" element={<InvestorDashboard />} />
        </Routes>

        {/* Blogs */}
        <div className="mt-8">
          <Blog />
        </div>

        {/* Islamic Sharia Guidance */}
        <div className="mt-8">
          <IslamicSharia />
        </div>
      </div>
    </Router>
  );
}
