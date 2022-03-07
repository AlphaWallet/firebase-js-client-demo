import Web3 from "web3";
import Store from "./store.js";
const store = new Store();

const web3 = new Web3(
  "wss://kovan.infura.io/ws/v3/40ed9277e69a450886b9443628efe039"
);
// const web3 = new Web3(
//   new Web3.providers.HttpProvider(
//     "https://kovan.infura.io/v3/40ed9277e69a450886b9443628efe039"
//   )
// );
const walletAddress = "0xD0c424B3016E9451109ED97221304DeC639b3F84";

const updateBalance = () => {
  web3.eth.getBalance(walletAddress).then((balance) => {
    const eth = web3.utils.fromWei(balance, "ether");
    console.log(eth);
    store.update(walletAddress, "ETH", eth);
    document.getElementById("balance").innerText = eth;
  });
};

setInterval(updateBalance, 3000);
