import React from 'react'
import  Trending  from '@/components/Home/Trending'
import Header from '@/components/Header'
import PageHeading from '@/components/info/PageHeading'
// import ProductItem from '@/components/module/ProductItem'

export default function page() {
  return (
    <div>
      <Header></Header>
      <PageHeading></PageHeading>
      <div className='row'>
        <div className='col-lg-3'>
          {/* <ProductItem></ProductItem> */}
        </div>
      </div>
    
  

    </div>
  )
}
