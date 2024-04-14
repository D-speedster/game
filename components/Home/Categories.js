import React from 'react'

export default async function Categories() {

  // let genre = await fetch('http://localhost:3000/api/product4');
  // let response = await genre.json();
  // console.log(response.data)

  return (
    <div className="section categories">
      <div className="container">
        <div className="row">

          {/* {response.data.map(data => {
            return <div className='col-3'><h1>{data.title}</h1><img src={data.pic} className='img-fluid' /></div>
          })} */}

        </div>
      </div>
    </div>

  )
}
