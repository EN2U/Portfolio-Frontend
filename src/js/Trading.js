import { api } from 'src/boot/axios'

export default class PublicMarketCandles {
  /*
    market: Market whose candles are being fetched.
    resolution: 1DAY, 4HOURS, 1HOUR, 30MINS, 15MINS, 5MINS, 1MIN
    fromISO: Starting point for the candles.
    endISO: Ending point for the candles.
    limit: Max number of candles (max 100)
  */
  static markets = () => api.get('https://api.dydx.exchange/v3/markets')
    .then(response => Object.keys(response.data.markets))

  static marketCandles = (
    market = 'BTC-USD', resolution = '1DAY', fromISO, toISO, limit = 100) => {
    return api.get(`https://api.dydx.exchange/v3/candles/${market}?resolution=${resolution}`).then(response => [{
      data: response.data.candles.map(candles => {
        return {
          x: new Date(candles.startedAt),
          y: [candles.open, candles.high, candles.low, candles.close]
        }
      })
    }]
    )
  }
}
