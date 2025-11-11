import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { PeraWalletConnect } from "@perawallet/connect";

// Dummy components for demonstration
const Dashboard = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
    <p>Welcome to GoldChain Dashboard. Here you can see NFTs, gold values, and transactions.</p>
  </div>
);

const InvestorDashboard = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">Investor Dashboard</h2>
    <p>Investor view with portfolio analytics (demo).</p>
  </div>
);

const NFTMint = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">NFT Minting</h2>
    <button className="bg-yellow-500 text-black px-4 py-2 rounded mt-2">Mint 1g Gold NFT</button>
  </div>
);

const IslamicSharia = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">Islamic Sharia Compliance</h2>
    <p>No interest-bearing loans (Riba), transparent and halal transactions.</p>
  </div>
);

const Blog = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">Latest Blogs</h2>
    <ul className="list-disc pl-5">
      <li>Blockchain in Gold Trading</li>
      <li>NFTs Backed by Gold</li>
      <li>Investing in Gold via Crypto</li>
    </ul>
  </div>
);

const WalletConnectComponent = ({ setWalletAddress }) => {
  const peraWallet = new PeraWalletConnect();
  const connectWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      if (accounts.length > 0) setWalletAddress(accounts[0]);
    } catch (err) {
      console.log("Wallet connect failed:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Connect Pera Wallet</h2>
      <button
        onClick={connectWallet}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Connect Wallet
      </button>
    </div>
  );
};

const GoldPrice = () => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => (prev ? +(prev + Math.random() * 5 - 2).toFixed(2) : 2300));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Real-Time Gold Price (per gram)</h2>
      <p className="text-2xl font-bold">${price}</p>
    </div>
  );
};

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded mt-2"
          onClick={() => navigate("/")}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
        <input type="text" placeholder="Full Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button
          type="submit"
          className="bg-yellow-500 text-black px-4 py-2 rounded mt-2"
          onClick={() => navigate("/signin")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-gray-200 p-4 flex justify-between items-center">
          <div className="font-bold text-xl">GoldChain</div>
          <nav className="flex gap-2">
            <Link to="/" className="px-2 py-1 bg-yellow-400 rounded">
              Home
            </Link>
            <Link to="/signin" className="px-2 py-1 bg-gray-300 rounded">
              Sign In
            </Link>
            <Link to="/signup" className="px-2 py-1 bg-gray-300 rounded">
              Sign Up
            </Link>
            <Link to="/investor" className="px-2 py-1 bg-gray-300 rounded">
              Investor
            </Link>
          </nav>
        </header>

        <WalletConnectComponent setWalletAddress={setWalletAddress} />
        <GoldPrice />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/nft-mint" element={<NFTMint />} />
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/islamic-sharia" element={<IslamicSharia />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>

        <footer className="p-4 mt-4 bg-gray-200 text-center">
          &copy; {new Date().getFullYear()} GoldChain Demo
        </footer>
      </div>
    </Router>
  );
}
