import React, { useEffect, useState } from "react";
import axios from "axios";

export default function goldPrice() {
  const [price, setPrice] = useState("Loading...");

  useEffect(() => {
    const fetchgoldPrice = async () => {
      try {
        const response = await axios.get(
          "https://www.goldapi.io/api/XAU/USD",
          {
            headers: { "x-access-token": "YOUR_API_KEY" },
          }
        );
        setPrice(`$${response.data.price.toFixed(2)} / oz`);
      } catch (err) {
        console.error(err);
        setPrice("Error fetching gold price");
      }
    };
    fetchgoldPrice();
    const interval = setInterval(fetchGoldPrice, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded mb-6 text-center">
      <h2 className="font-bold mb-2">Real-Time Gold Price</h2>
      <p>{price}</p>
    </div>
  );
}
