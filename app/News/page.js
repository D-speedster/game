import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageHeading from '@/components/info/PageHeading'
import React from 'react'

// import '../News.module.css'
export default function page() {
    return (
        <>
            <Header></Header>
            <PageHeading title='اخبار گیم'></PageHeading>
            <div className='container mt-4'>
                <div className='row gx-2 header-news'>
                    <div className='col-lg-6'>
                        <div className='news-header-item'>
                            <img src='/images/top-game-01.jpg' className='img-fluid rounded-3' />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='news-header-item'>
                            <img src='/images/banner-image.jpg' className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='news-header-item'>
                            <img src='/images/single-game.jpg' className='img-fluid' />
                        </div>
                    </div>
                </div>
                <br />
                <div className='row gx-0 section-news'>
                    <div className='col-lg-3 '>
                        <div className=' '>
                            <div className='container pt-3'>
                                <div className='item-news'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/1.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>

                                <div className='item-news mt-2'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/avatar-frontiers-of-pandora.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>
                                <div className='item-news mt-2'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/dune-2-paul-leader.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>
                                <div className='item-news mt-2'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/001.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='' >
                            <div className='container'>
                                <div className='main-news-item pt-3'>
                                    <div className='card' style={{ border: 'none' }}>
                                        <div className='row gx-0'>
                                            <div className='col-lg-4'>
                                                <img src='/images/news/house.webp' className='rounded-start' height='100%' />
                                            </div>
                                            <div className='col-lg-8 ps-2 pt-2'>
                                                <h3 className='card-title' style={{ color: '#000 !important', fontSize: '16px', fontWeight: '600' }}>
                                                    ویدیو فصل دوم خاندان اژدها؛ دفاع از وارث برحق تاج‌وتخت
                                                </h3>
                                                <small>1403/02/05 Admin</small>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-news-item pt-3'>
                                    <div className='card' style={{ border: 'none' }}>
                                        <div className='row gx-0'>
                                            <div className='col-lg-4'>
                                                <img src='/images/news/aiden-pearce-in-watch-dogs-complete-edition.webp' className='rounded-start' height='100%' />
                                            </div>
                                            <div className='col-lg-8 ps-2 pt-2'>
                                                <h3 className='card-title' style={{ color: '#000 !important', fontSize: '16px', fontWeight: '600' }}>
                                                بازی‌های Watch Dogs به خاطره‌ها می‌پیوندند؟
                                                </h3>
                                                <small>1403/02/05 Admin</small>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-news-item pt-3'>
                                    <div className='card' style={{ border: 'none' }}>
                                        <div className='row gx-0'>
                                            <div className='col-lg-4'>
                                                <img src='/images/news/billie-eilish-fortnite.webp' className='rounded-start' height='100%' />
                                            </div>
                                            <div className='col-lg-8 ps-2 pt-2'>
                                                <h3 className='card-title' style={{ color: '#000 !important', fontSize: '16px', fontWeight: '600' }}>
                                                بازی‌های Watch Dogs به خاطره‌ها می‌پیوندند؟
                                                </h3>
                                                <small>1403/02/05 Admin</small>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-news-item pt-3'>
                                    <div className='card' style={{ border: 'none' }}>
                                        <div className='row gx-0'>
                                            <div className='col-lg-4'>
                                                <img src='/images/news/star-wars-jedi-survivor-ea-play.webp' className='rounded-start' height='100%' />
                                            </div>
                                            <div className='col-lg-8 ps-2 pt-2'>
                                                <h3 className='card-title' style={{ color: '#000 !important', fontSize: '16px', fontWeight: '600' }}>
                                                بازی‌های Watch Dogs به خاطره‌ها می‌پیوندند؟
                                                </h3>
                                                <small>1403/02/05 Admin</small>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-news-item pt-3'>
                                    <div className='card' style={{ border: 'none' }}>
                                        <div className='row gx-0'>
                                            <div className='col-lg-4'>
                                                <img src='/images/news/sonic-frontiers.webp' className='rounded-start' height='100%' />
                                            </div>
                                            <div className='col-lg-8 ps-2 pt-2'>
                                                <h3 className='card-title' style={{ color: '#000 !important', fontSize: '16px', fontWeight: '600' }}>
                                                بازی‌های Watch Dogs به خاطره‌ها می‌پیوندند؟
                                                </h3>
                                                <small>1403/02/05 Admin</small>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-news-item pt-3'>
                                    <div className='card' style={{ border: 'none' }}>
                                        <div className='row gx-0'>
                                            <div className='col-lg-4'>
                                                <img src='/images/news/house.webp' className='rounded-start' height='100%'/>
                                            </div>
                                            <div className='col-lg-8 ps-2 pt-2'>
                                                <h3 className='card-title' style={{ color: '#000 !important', fontSize: '16px', fontWeight: '600' }}>
                                                بازی‌های Watch Dogs به خاطره‌ها می‌پیوندند؟
                                                </h3>
                                                <small>1403/02/05 Admin</small>
                                                <p>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و    ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white mt-2 rounded-3'>
                                    1 2 3 4 5
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-3 '>
                        <div className='  '>
                            <div className='container pt-3 '>
                                <div className='item-news'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/1.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>

                                <div className='item-news mt-2'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/avatar-frontiers-of-pandora.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>
                                <div className='item-news mt-2'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/dune-2-paul-leader.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>
                                <div className='item-news mt-2'>
                                    <div className='card text-center' style={{ border: 'none' }}>
                                        <img src='/images/news/001.webp' className='card-img' />
                                        <span className='card-title'>راهنمای خرید کامپیوتر گیمینگ رده حرفه ای</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}
