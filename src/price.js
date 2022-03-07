import CoinGecko from "coingecko-api";
const coinGeckoClient = new CoinGecko();

export default class {
  async update() {
    const result = await coinGeckoClient.coins.all();
    const price = result.data[1].market_data.current_price.usd;
    return await Promise.resolve(price);
  }
}
