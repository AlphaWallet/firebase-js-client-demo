import Web3 from "web3";

const web3 = new Web3(
  "wss://kovan.infura.io/ws/v3/40ed9277e69a450886b9443628efe039"
);

export default class {
  async update(walletAddress) {
    return web3.eth.getBalance(walletAddress).then((balance) => {
      const eth = web3.utils.fromWei(balance, "ether");
      return Promise.resolve(eth);
    });
  }
}
