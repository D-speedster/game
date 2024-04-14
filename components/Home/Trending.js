"use client";


import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../module/ProductItem';

export default function Trending() {
    return (
        <div className="section trending">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>پرفروش</h6>
                            <h2>پرفروش ترین ها</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-button float-end">
                            <a href="shop.html">دیدن همه</a>
                        </div>
                    </div>
                    <ProductItem></ProductItem>



                </div>
            </div>
        </div>

    )
}
