'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {

  const [scrollPosition, setScrollPosition] = useState(0);
  let [ClassNeed, SetClassNeed] = useState('');
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    if (scrollPosition > 50) {

      SetClassNeed('bg-dark fixed-top')
    } else {
      SetClassNeed('')
    }


  });

  return (


    <header className={`header-area ${ClassNeed} `}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">


              {/* <ul className="nav">
                  <li>
                   
                  </li>
                  <li>
                   
                  </li>
                  <li>
                    <Link href="product-details.html">ویژه</Link>
                  </li>
                  <li>
                    <Link href="contact">تماس با ما</Link>
                  </li>

                </ul> */}
              <ul>


              </ul>
              {/* ***** Menu End ***** */}
            </nav>
            <nav class="navbar navbar-expand-lg " >
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <div className='LogoWeb d-flex' style={{ marginTop: '5px' }}>
                    <img src='/images/Logo5.png' style={{ height: '55px', width: '55px', aspectRatio: '1.5' }} />
                    <span className='mt-3' style={{ fontWeight: '600', color: '#FFF', fontSize: '14px' }}>اسپارتا</span>
                  </div>
                </a>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link style={{color : '#FFF '}} href="/" className="nav-link active">
                        خانه
                      </Link>

                    </li>
                    <li class="nav-item">
                      <Link style={{ color: '#FFF ' }} className="nav-link" href="products">فروشگاه ما</Link>
                    </li>
                    <li class="nav-item">
                      <Link style={{ color: '#FFF ' }} className="nav-link" href="products">اخبار</Link>
                    </li>
                    <li class="nav-item">
                      <Link style={{ color: '#FFF ' }} className="nav-link" href="contact">تماس با ما</Link>
                    </li>
                  </ul>
                  <span style={{color : '#FFF '}} class="navbar-text me-4">
                    ثبت نام / لاگین
                  </span> 
                  <span style={{color : '#FFF '}} class="navbar-text">
                    سبد خرید
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>





  )
}
