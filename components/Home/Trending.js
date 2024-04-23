
'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import ProductItem from '../module/ProductItem';
import Link from 'next/link';

export default async function Trending({ title1, title2 }) {
    let genre = await fetch('http://localhost:3000/api/product', {
        cache: 'no-store'
    });
    let response = await genre.json();
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

                                        <div className='container'>
                                            <div className='mt-2 mb-2'>


                                                <span className='titleGame'>بازی {data.title} </span>
                                                <span className='d-block'>PS5</span>

                                            </div>
                                            <div className='info-platform'>

                                            </div>
                                            <div className='price'>
                                                <button className='btn ' style={{ backgroundColor: '#0056b3', color: '#FFF' }}>{data.price} تومان</button>
                                            </div>
                                        </div>


                                    </div>
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>
                </div>
            </div>

        </>


    )
}
