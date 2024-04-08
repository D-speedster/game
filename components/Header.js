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

            

              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <Link href="/" className="active">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link href="products">فروشگاه ما</Link>
                </li>
                <li>
                  <Link href="product-details.html">ویژه</Link>
                </li>
                <li>
                  <Link href="contact">تماس با ما</Link>
                </li>

              </ul>
              <ul>
                <li >
                  <button className='btn btn-lg btn-danger'>ورود</button>
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
