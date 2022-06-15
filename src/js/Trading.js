export default class MarketCandles {
  /*
    market: Market whose candles are being fetched.
    resolution: 1DAY, 4HOURS, 1HOUR, 30MINS, 15MINS, 5MINS, 1MIN
    fromISO: Starting point for the candles.
    endISO: Ending point for the candles.
    limit: Max number of candles (max 100)
  */
  constructor(market, resolution, fromISO, toISO, limit) {
    this.market = market
    this.resolution = resolution
    this.fromISO = fromISO
    this.toISO = toISO
    this.limit = limit
  }
}

