import Link from 'next/link'
import React from 'react'

export default function Most_played() {
    return (
        <div className="section most-played">
            <div className="container">
            <div className='row Title-Product mb-4'>
                            <div className='col'>
                                <div className='title-header'>
                                    برترین ژانر ها
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
                <div className='row'>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="images/top-game-01.jpg" alt /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">ماجراجویی</span>
                                <h4>بازی های ماجراجویی</h4>
                                <a href="product-details.html">مشاهده</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="images/top-game-02.jpg" alt /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">بتل رویال</span>
                                <h4>بازی های بتل رویال</h4>
                                <a href="product-details.html">مشاهده</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="images/top-game-03.jpg" alt /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">مبارزه ای</span>
                                <h4>برترین های فایتینگ</h4>
                                <a href="product-details.html">مشاهده</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="images/top-game-04.jpg" alt /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">اکشن</span>
                                <h4>برترین های اکشن</h4>
                                <a href="product-details.html">مشاهده</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="images/top-game-05.jpg" alt /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">ورزشی</span>
                                <h4>برترین های ورزشی</h4>
                                <a href="product-details.html">مشاهده</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="images/top-game-06.jpg" alt /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">شبیه ساز</span>
                                <h4>برترین های شبیه ساز</h4>
                                <a href="product-details.html">مشاهده</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
