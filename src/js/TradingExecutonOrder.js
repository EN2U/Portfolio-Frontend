import PublicMarketCandles from './Trading'
/**
 *
 * @class TradingExecutionOrders
 */

export default class TradingExecutionOrders {
  constructor (candlesAmmount, timeframe, asset) {
    this.candlesAmmount = candlesAmmount
    this.timeframe = timeframe
    this.asset = asset
  }

  async candlesRange (from, to) {
    const candlesticks = await PublicMarketCandles.marketCandles({ market: this.asset, resolution: this.timeframe, fromISO: from, toISO: to })

    return candlesticks[0].data.map(val => { return { x: val.x, y: val.y } })
  }
}
