import TradingExecutionOrders from './TradingExecutonOrder'

/**
 * Class representing TWAP order execution
 * @extends TradingExecutionOrders
 */

export default class TWAP extends TradingExecutionOrders {
  constructor (candlesAmmout, timeframe, shares, asset) {
    super(candlesAmmout, timeframe, asset)
    this.shares = shares
  }

  dailyAverage (params) {

  }

  mounthlyAverage () {

  }
}
