import TradingExecutionOrders from './TradingExecutonOrder'
import moment from 'moment'
/**
 * Class representing TWAP order execution
 * @extends TradingExecutionOrders
 */

export default class TWAP extends TradingExecutionOrders {
  constructor (candlesAmmout, timeframe, shares, asset) {
    super(candlesAmmout, timeframe, asset)
    this.shares = shares
  }

  async candlestickAverage (maxRange) {
    const candlesticks = await this.candlesRange(moment().subtract(maxRange, 'd').toISOString(), moment().toISOString())
    return candlesticks.map(value => {
      return {
        x: value.x,
        y: value.y.reduce((a, b) => {
          return parseFloat(a) + parseFloat(b)
        }) / 4
      }
    })
  }

  async candlestickOrderCalc () {
    const candlestickAverage = await this.candlestickAverage(this.candlesAmmount)
    return candlestickAverage
  }
}
