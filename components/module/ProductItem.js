import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default async function ProductItem() {
    let genre = await fetch('http://localhost:3000/api/product4');
    let response = await genre.json();
    console.log(response.length)


    return (
        <>


            <>
                <Swiper


                    modules={[Pagination]}
                    className="mySwiper"
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
                            slidesPerView: 4,
                            spaceBetween: 50,
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
                                    <span className='fw-bold'>{data.price.toLocaleString()} تومان</span>
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
