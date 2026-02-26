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
  const skeletonRows = Array.from({ length: 5 }).map((_, i) => ({ id: i }))

  const columns: DataTableColumn<{ id: number }>[] = [
    { header: 'Name', cell: () => <Skeleton className="h-4 w-24" /> },
    { header: 'Symbol', cell: () => <Skeleton className="h-4 w-16" /> },
    { header: 'Price', cell: () => <Skeleton className="h-4 w-20" /> },
    { header: '24h Change', cell: () => <Skeleton className="h-4 w-12" /> },
  ]

  return (
    <div id="trending-coins-fallback" className="trending-coins-fallback">
      <p className="mb-4">Trending Coins</p>
      <DataTable columns={columns} data={skeletonRows} />
    </div>
  )
}