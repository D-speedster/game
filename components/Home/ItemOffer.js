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
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='/images/games/eldenRing.jpg' />
                    <h6> خرید بازی Eleden Ring</h6>
                </SwiperSlide>

                <SwiperSlide>

                    <img src='/images/games/ragnarok.jpg' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src='/images/games/Gta.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/games/Hogwarts.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/games/modern3.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/games/spiderman.jpg' />
                </SwiperSlide>


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        {/* <circle cx="24" cy="24" r="20"></circle> */}
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}
