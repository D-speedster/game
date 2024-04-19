'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                dir="rtl"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='/images/GTA-6-Prison-Fence-Rockstar-Games-Logo-768x432.jpg' />
                    <div className='title-News'>
                        <span>کارمندان Rockstar Games به دفتر بازگشتند</span>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/Stellar-Blade-Costumes_02-05-24-768x432.jpg' />
                    <div className='title-News'>
                        <span>طرفداران بیش از ۱۰۰ ساعت را صرف تجربه دموی Stellar Blade کرده‌اند
                        </span>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/Dragons-Dogma-2-2-768x432.webp' />
                    <div className='title-News'>
                        <span>بازی Dragon’s Dogma 2 حدود ۸۰% از بازیکنان خود را در استیم از دست داده است

                        </span>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                  
                    <img src='/images/mafia-definitive-edition-image-768x432.jpg' />
                    <div className='title-News'>
                        <span>
                        شایعه: نسخه جدید Mafia به‌زودی معرفی می‌شود

                        </span>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/ghost-of-tsushima-768x432.jpg.webp' />
                    <div className='title-News'>
                        <span>
                            سیستم مورد نیاز Ghost of Tsushima مشخص شد؛
                        </span>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <img src='/images/maxresdefault-3-768x432.jpg' />
                    <div className='title-News'>
                        <span>
                        اگر بازی Joker جهان باز با آنریل انجین ۵ ساخته شود
                        </span>

                    </div>
                </SwiperSlide>
               
            </Swiper>
        </>
    );
}
