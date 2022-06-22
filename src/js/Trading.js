import { api } from 'src/boot/axios'

/**
 * @class PublicMarketCandles
 */

export default class PublicMarketCandles {
  /**
   * Get all markets from dydx api
  */

  static markets = () => api.get('markets')
    .then(response => Object.keys(response.data.markets))

  /**
   * market: Market whose candles are being fetched.
   * resolution: 1DAY, 4HOURS, 1HOUR, 30MINS, 15MINS, 5MINS, 1MIN
   * fromISO: Starting point for the candles.
   * endISO: Ending point for the candles.
   * limit: Max number of candles (max 100)
  */
  static marketCandles = (
    market = 'BTC-USD', resolution = '1DAY', fromISO, toISO, limit = 100) => {
    return api.get(`candles/${market}?resolution=${resolution}`).then(response => [{
      data: response.data.candles.map(candles => {
        return {
          x: new Date(candles.startedAt),
          y: [candles.open, candles.high, candles.low, candles.close]
        }
      })
    }]
    )
  }

  /**
   * time-weighted average price (TWAP) is the average price of a security over a specified time.
   */
}
