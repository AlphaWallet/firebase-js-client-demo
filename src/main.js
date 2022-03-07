import Store from "./store.js";
import Price from "./price.js";
import Balance from "./balance.js";

const store = new Store();
const price = new Price();
const balance = new Balance();

const walletAddress = "0xD0c424B3016E9451109ED97221304DeC639b3F84";

setInterval(async () => {
  const eth = await balance.update(walletAddress);
  store.updateBalance(walletAddress, "ETH", eth);
  document.getElementById("balance").innerText = eth;

  const usd = await price.update();
  store.updatePrice(walletAddress, "ETH", usd);
  document.getElementById("price").innerText = usd;
}, 3000);
