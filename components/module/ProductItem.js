import React from 'react'

export default function ProductItem() {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="item">
                <div className="thumb">
                    <a href="product-details.html"><img src="images/trending-01.jpg" alt /></a>
                    <span className="price"><em>$28</em>$20</span>
                </div>
                <div className="down-content">
                    <span className="category">Action</span>
                    <h4>Assasin Creed</h4>
                    <a href="product-details.html"><i className="fa fa-shopping-bag" /></a>
                </div>
            </div>
        </div>
    )
}
