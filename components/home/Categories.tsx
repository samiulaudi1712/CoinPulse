import React from 'react'
import { fetcher } from '@/lib/fetcher'
import CategoriesClient from '@/components/CategoriesClient'

const Categories = async () => {
    const categories = await fetcher<Category[]>('/coins/categories');
    return <CategoriesClient categories={categories} />
}

export default Categories