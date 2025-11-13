export async function getgoldPrice() {
  try {
    const res = await fetch("https://api.metals.live/v1/spot");
    const data = await res.json();
    return data[0].gold;
  } catch {
    return null;
  }
}
