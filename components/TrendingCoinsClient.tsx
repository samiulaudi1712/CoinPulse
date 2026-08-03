"use client"
import Image from 'next/image'
import Link from 'next/link'
import DataTable from '@/components/DataTable'
import { cn } from '@/lib/utils'
import { TrendingDown, TrendingUp } from 'lucide-react'

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      )
    }
  },
  {
    header: '24h Change',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;
      const change = item.data.price_change_percentage_24h.usd;
      return (
        <div className={cn('price-change flex items-center gap-1', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
  <p>{change > 0 ? '+' : ''}{change.toFixed(2)}%</p>
  {isTrendingUp ? <TrendingUp width={16} height={16} /> : <TrendingDown width={16} height={16} />}
</div>
      )
    }
},
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => {
      const price = coin.item.data.price;
      return (
        <p>${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      )
    }
}
]

const TrendingCoinsClient = ({ coins }: { coins: TrendingCoin[] }) => {
  return (
    <div id="trending-coins">
      <h4>Trending coins</h4>
      <DataTable 
      columns={columns} 
      data={coins}
      headerCellClassName="py-3!"
      bodyCellClassName="py-2!"
      
      />
    </div>
  )
}

export default TrendingCoinsClient