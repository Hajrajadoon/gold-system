import IslamicSharia from "./components/ui/IslamicSharia";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">GoldChain Blockchain Demo</h1>

        {/* Wallet Connect */}
        <WalletConnect />

        {/* Real-Time Gold Price */}
        <GoldPrice />

        {/* Dashboard routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/nft-mint" element={<NFTMint />} />
          <Route path="/investor" element={<InvestorDashboard />} />
        </Routes>

        {/* Blogs */}
        <Blog />

        {/* Islamic Sharia Guidance */}
        <IslamicSharia />
      </div>
    </Router>
  );
}
