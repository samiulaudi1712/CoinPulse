import React from 'react'
import { fetcher } from '@/lib/coingecko.actions'
import TrendingCoinsClient from '@/components/TrendingCoinsClient'

const TrendingCoins = async () => {
  const { coins } = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300);
  return <TrendingCoinsClient coins={coins} />
}

export default TrendingCoins