"use client"
import DataTable from '@/components/DataTable'
import { cn, formatCurrency, formatPercentage } from '@/lib/utils'
import Image from 'next/image'
import { TrendingUp, TrendingDown } from 'lucide-react'

const columns: DataTableColumn<Category>[] = [
    {
        header: 'Category',
        cellClassName: 'category-cell',
        cell: (category) => category.name
    },
    {
        header: 'Top Gainers',
        cellClassName: 'top-gainers-cell',
        cell: (category) => (
            <div className="flex">
                {category.top_3_coins.map(coin =>
                    <Image src={coin} alt={coin} key={coin} width={28} height={28} className="rounded-full mr-1" />
                )}
            </div>
        )
    },
    {
        header: 'Market Cap',
        cellClassName: 'market-cap-cell',
        cell: (category) => formatCurrency(category.market_cap),
    },
    {
        header: '24h Change',
        cellClassName: 'change-header-cell',
        cell: (category) => {
            const isTrendingUp = category.market_cap_change_24h > 0;
            return (
                <div className={cn('change-cell', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
                   <p className="flex items-center gap-2"> 
                    
                    {formatPercentage(category.market_cap_change_24h)}

                    {isTrendingUp ? <TrendingUp width={16} height={16} /> : <TrendingDown width={16} height={16} />}
                   {/* {category.market_cap_change_24h.toFixed(2)}% */}
                   
                   </p>
                    
                </div>
            )
        }
    },
    {
        header: '24h Volume',
        cellClassName: 'volume-cell',
        cell: (category) => formatCurrency(category.volume_24h),
    },
]

const CategoriesClient = ({ categories }: { categories: Category[] }) => {
    return (
        <div id="categories" className="custom-scrollbar">
            <h4>Top Categories</h4>
            <DataTable
                columns={columns}
                data={categories?.slice(0, 10)}
                rowKey={(_, index) => index}
                tableClassName="mt-3"
            />
        </div>
    )
}

export default CategoriesClient