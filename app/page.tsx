import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetcher } from '@/lib/fetcher'
import HomeClient from '@/components/HomeClient'

const page = async () => {
  const coin = await fetcher<CoinDetailsData>('/coins/bitcoin');




  return <HomeClient coin={coin} />
}

export default page