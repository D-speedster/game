'use client'
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
export default function ItemOffer() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='card'>

                        <img src='/images/games/spiderman.jpg' />

                        <div className='container'>
                            <div className='mt-2 mb-2'>


                                <span className='titleGame'>بازی data.title </span>
                                <span className='d-block'>PS5</span>

                            </div>
                            <div className='info-platform'>

                            </div>
                            <div className='price'>
                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>data.price تومان</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className='card'>

                        <img src='/images/games/spiderman.jpg' />

                        <div className='container'>
                            <div className='mt-2 mb-2'>


                                <span className='titleGame'>بازی data.title </span>
                                <span className='d-block'>PS5</span>

                            </div>
                            <div className='info-platform'>

                            </div>
                            <div className='price'>
                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>data.price تومان</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='card'>

                        <img src='/images/games/spiderman.jpg' />

                        <div className='container'>
                            <div className='mt-2 mb-2'>


                                <span className='titleGame'>بازی data.title </span>
                                <span className='d-block'>PS5</span>

                            </div>
                            <div className='info-platform'>

                            </div>
                            <div className='price'>
                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>data.price تومان</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>

                        <img src='/images/games/spiderman.jpg' />

                        <div className='container'>
                            <div className='mt-2 mb-2'>


                                <span className='titleGame'>بازی data.title </span>
                                <span className='d-block'>PS5</span>

                            </div>
                            <div className='info-platform'>

                            </div>
                            <div className='price'>
                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>data.price تومان</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>

                        <img src='/images/games/spiderman.jpg' />

                        <div className='container'>
                            <div className='mt-2 mb-2'>


                                <span className='titleGame'>بازی data.title </span>
                                <span className='d-block'>PS5</span>

                            </div>
                            <div className='info-platform'>

                            </div>
                            <div className='price'>
                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>data.price تومان</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card'>

                        <img src='/images/games/spiderman.jpg' />

                        <div className='container'>
                            <div className='mt-2 mb-2'>


                                <span className='titleGame'>بازی data.title </span>
                                <span className='d-block'>PS5</span>

                            </div>
                            <div className='info-platform'>

                            </div>
                            <div className='price'>
                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>data.price تومان</button>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
