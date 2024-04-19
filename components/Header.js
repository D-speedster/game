import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link href="" className="logo">
                <img src="images/logoo.png" alt="" style={{ width: '158px' }} />
                <span style={{ color: 'white' }}>Console Fa</span>
              </Link>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <Link href="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="products">Our Shop</Link>
                </li>
                <li>
                  <Link href="product-details.html">Product Details</Link>
                </li>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Sign In</Link>
                </li>
              </ul>
              <ul>
                <li className='test'>
                  <Link href="/">Sign In</Link>
                </li>
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>

  )
}
