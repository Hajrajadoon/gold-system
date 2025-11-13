import React, { useEffect, useState } from 'react';
import { getGoldPrice } from '../utils/goldPrice';

function Home() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    getGoldPrice().then(setPrice);
    const interval = setInterval(() => getGoldPrice().then(setPrice), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold text-yellow-600 mb-4">Revolutionizing Gold with Blockchain</h2>
      <p className="text-lg mb-8">
        Real-time Gold Price:&nbsp;
        <span className="font-semibold text-yellow-700">
          {price ? `$${price.toLocaleString()}/oz` : 'Loading...'}
        </span>
      </p>
      {/* Keep your existing feature sections here */}
    </div>
  );
}

export default Home;
