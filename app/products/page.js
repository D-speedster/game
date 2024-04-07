import React from 'react'
import  Trending  from '@/components/Home/Trending'
import Header from '@/components/Header'
import PageHeading from '@/components/info/PageHeading'
export default function page() {
  return (
    <div>
      <Header></Header>
      <PageHeading></PageHeading>
      <Trending></Trending>
  

    </div>
  )
}
