import { Skeleton } from '@/components/ui/skeleton'
import DataTable from '@/components/DataTable'

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback" className="coin-overview-fallback">
      <div className="header pt-2">
        <Skeleton className="w-14 h-14 rounded-full" />
        <div className="info space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-8 w-48" />
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-40" />
      </div>
    </div>
  )
}

export const TrendingCoinsFallback = () => {
  const skeletonRows = Array.from({ length: 5 }).map((_, i) => ({
    id: `skeleton-${i}`,
    name: <Skeleton className="h-4 w-24" />,
    symbol: <Skeleton className="h-4 w-16" />,
    price: <Skeleton className="h-4 w-20" />,
    change24h: <Skeleton className="h-4 w-12" />,
  }))

  return (
    <div id="trending-coins-fallback" className="trending-coins-fallback">
      <p className="mb-4">Trending Coins</p>
      <DataTable
        columns={[
                    { header: 'Name', cell: (row) => row.name },
         { header: 'Symbol', cell: (row) => row.symbol },
         { header: 'Price', cell: (row) => row.price },
         { header: '24h Change', cell: (row) => row.change24h },
        ]}
        data={skeletonRows}
       rowKey={(row) => row.id}
      />
    </div>
  )
}