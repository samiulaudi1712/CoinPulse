import React, { Suspense } from 'react'
import TrendingCoins from '@/components/TrendingCoins'
import CoinOverview from './home/CoinOverview'
import { CoinOverviewFallback } from './home/fallback'

const HomeClient = ({ coin }: { coin: CoinDetailsData }) => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview coin={coin} />
        </Suspense>
        <Suspense fallback={<div>Loading trending coins...</div>}>
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