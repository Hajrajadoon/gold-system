import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GoldPrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        // Example API: metals-api.com or any free API
        const response = await axios.get(
          "https://www.goldapi.io/api/XAU/USD",
          {
            headers: { "x-access-token": "goldapi-your-api-key-here" }
          }
        );
        setPrice(response.data.price);
      } catch (error) {
        console.error("Error fetching gold price:", error);
      }
    };

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 60000); // refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-50 p-4 rounded shadow mt-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Real-Time Gold Price</h2>
      {price ? (
        <p className="text-xl font-bold">${price.toFixed(2)} USD / oz</p>
      ) : (
        <p>Loading gold price...</p>
      )}
    </div>
  );
}
