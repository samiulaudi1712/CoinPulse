import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetcher } from '@/lib/coingecko.actions'
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
      return (
        <div className={cn('price-change', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
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
      const change = coin.item.data.price_change_percentage_24h.usd;
      return (
        <div>
          <p>${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className={change > 0 ? 'text-green-500' : 'text-red-500'}>
            {change > 0 ? '+' : ''}{change.toFixed(2)}%
          </p>
        </div>
      )
    }
  }
]

const TrendingCoins = async () => {
  const { coins } = await fetcher<{ coins: TrendingCoin[] }>('/search/trending', undefined, 300);

  return (
    <div>
      <p>Trending coins</p>
      <DataTable columns={columns} data={coins} rowKey={(_row, index) => index} />
    </div>
  )
}

export default TrendingCoins