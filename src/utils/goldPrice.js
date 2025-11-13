// src/utils/goldPrice.js
export async function getGoldPrice() {
  try {
    // Example: dummy price or API fetch
    return 2000; // replace with real API call
  } catch (err) {
    console.error(err);
    return null;
  }
}
