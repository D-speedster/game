import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default async function ProductItem() {
    let genre = await fetch('http://localhost:3000/api/product', {
        cache: 'no-store'
    });
    let response = await genre.json();



    return (
        <>


            <>
                <Swiper


                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                      }} 
                      grabCursor={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {
                        response.data.map(data => {
                            return <SwiperSlide><div className='card'>

                                <img src={data.pic} />

                                <div className='mt-2 mb-2'>
                                    <span>بازی {data.title}</span>
                                </div>

                                <div className='price'>
                                   <button className='btn ' style={{backgroundColor: '#0056b3' , color : '#FFF'}}>{data.price} تومان</button>
                                </div>


                            </div>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            </>



        </>
    )
}
