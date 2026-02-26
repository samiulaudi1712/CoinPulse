import React, { Suspense } from 'react'
import { formatCurrency } from '@/lib/utils'
import TrendingCoins from '@/components/TrendingCoins'
import CoinOverview from './home/CoinOverview'
import { CoinOverviewFallback, TrendingCoinsFallback } from './home/fallback'

const HomeClient = ({ coin }: { coin: CoinDetailsData }) => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  )
}

export default HomeClient