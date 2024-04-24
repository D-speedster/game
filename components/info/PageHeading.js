import React from 'react'

export default function PageHeading({ title }) {
  return (
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>{title}</h3>
            <span className="breadcrumb"><a href="#">Home</a>  &gt;  <a href="#">Shop</a>  &gt;  Assasin Creed</span>
          </div>
        </div>
      </div>
    </div>

  )
}
