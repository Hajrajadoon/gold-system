import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white p-4 rounded shadow mb-6 flex justify-center space-x-6">
      <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
      <Link to="/nft-mint" className="text-blue-600 hover:underline">NFT Mint</Link>
      <Link to="/investor" className="text-blue-600 hover:underline">Investor</Link>
      <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      <Link to="/signin" className="text-blue-600 hover:underline">Sign In</Link>
    </nav>
  );
}
