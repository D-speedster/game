"use client";


import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../module/ProductItem';
import Link from 'next/link';

export default function Trending({ title1, title2 }) {
    return (
        <>
            <div className='container'>
                <div className='Product'>
                    <div className='container'>
                        <div className='row Title-Product mb-4'>
                            <div className='col'>
                                <div className='title-header'>
                                    {title1}
                                </div>
                            </div>
                            <div className='col'>
                                <div className='show_all float-end'>
                                    <Link href='/products'>
                                    <span>
                                        <span className='me-2 '>مشاهده همه</span>
                                        <i class="fas fa-solid fa-arrow-left"></i>
                                    </span>
                                    </Link>
                                 
                                </div>
                            </div>

                        </div>
                        <ProductItem></ProductItem>

                    </div>
                </div>
            </div>

        </>


    )
}
