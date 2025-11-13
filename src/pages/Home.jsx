// src/pages/Home.jsx
import { getGoldPrice } from '../utils/goldPrice';

useEffect(() => {
  async function fetchPrice() {
    const price = await getGoldPrice();
    setGoldPrice(price);
  }
  fetchPrice();
}, []);
