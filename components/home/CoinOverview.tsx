import React from 'react'
import { fetcher } from '@/lib/fetcher'
import { formatCurrency } from '@/lib/utils';

const CoinOverview = ({ coin }: { coin: CoinDetailsData }) => {
  return (
    <div id="coin-overview">
          <div className="header pt-2">
            <img src={coin.image.large} alt={coin.name} width={56} height={56} />
            <div className="info">
              <p>{coin.name} / {coin.symbol.toUpperCase()}</p>
             <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
            </div>
          </div>
        </div>
  )
}

export default CoinOverview