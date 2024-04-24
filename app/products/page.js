import React from 'react'
import Trending from '@/components/Home/Trending'
import Header from '@/components/Header'
import PageHeading from '@/components/info/PageHeading'

export default async function page() {
  let data = await fetch('http://localhost:3000/api/product');
  let res = await data.json();
  console.log(res)
  return (
    <div>
      <Header></Header>
      <PageHeading title='محصولات'></PageHeading>
      <div className='container '>
        <div className='row'>
          {res.data.map((game) => {
            return <div className='col-lg-3 Product '>
              <div className='card'>

                <img src={game.pic} />

                <div className='container'>
                  <div className='mt-2 mb-2'>


                    <span className='titleGame'>بازی {game.title} </span>
                    <span className='d-block'>PS5</span>

                  </div>
                  <div className='info-platform'>

                  </div>
                  <div className='price'>
                    <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>{game.price} تومان</button>
                  </div>
                </div>


              </div>
            </div>

          })}

        </div>
      </div>



    </div>
  )
}
