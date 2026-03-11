import React from 'react'
import { fetcher } from '@/lib/fetcher'
import { formatCurrency } from '@/lib/utils';
import CandlestickChart from '@/components/CandlestickChart';

const CoinOverview = async ({ coin: initialCoin }: { coin?: CoinDetailsData }) => {
  let coin = initialCoin;
  let coinOHLCData;

  try {
    const [coinData, ohlcData] = await Promise.all([
      initialCoin ? Promise.resolve(initialCoin) : fetcher<CoinDetailsData>('/coins/bitcoin', {
        dex_pair_format: 'symbol',
      }),
      fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
        vs_currency: 'usd',
        days: '1',
        precision: 'full',
      }),
    ])

    coin = coinData;
    coinOHLCData = ohlcData;
  } catch (error) {
    console.error('Error fetching coin data:', error);
  }

  if (!coin) return null;

  return (
    <div id="coin-overview">
      <CandlestickChart data={coinOHLCData} coinId="bitcoin">
        <div className="header pt-2">
          <img src={coin.image.large} alt={coin.name} width={56} height={56} />
          <div className="info">
            <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
          </div>
        </div>
      </CandlestickChart>
    </div>
  )
}

export default CoinOverview