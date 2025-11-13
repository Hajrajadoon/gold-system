import React from 'react';
import Navbar from '../shared/Navbar';
import WalletConnectButton from '../shared/WalletConnectButton';
import { getGoldPrice } from '../utils/goldPrice';

const NFTMint = () => {
  const [goldPrice, setGoldPrice] = React.useState(null);

  React.useEffect(() => {
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
        <h2 className="text-2xl font-bold mb-4">Mint Your Gold NFT</h2>
        {goldPrice && <p className="mb-4">Current Gold Price: ${goldPrice}</p>}
        <button className="px-4 py-2 bg-yellow-500 text-white rounded">
          Mint NFT
        </button>
        <WalletConnectButton />
      </section>
    </div>
  );
};

export default NFTMint;
