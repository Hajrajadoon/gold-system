export async function getGoldPrice() {
  try {
    const res = await fetch("https://api.metals.live/v1/spot");
    const data = await res.json();
    // first element = gold price in USD/oz
    return data[0].gold;
  } catch {
    return null;
  }
}
