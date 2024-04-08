import React from 'react'
import ProductItem from '../module/ProductItem'

export default function Trending() {
    return (
        <div className="section trending">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>جذیدترین</h6>
                            <h2>جدیدترین بازی ها</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-button float-end">
                            <a href="shop.html">دیدن همه</a>
                        </div>
                    </div>
                   
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                </div>
            </div>
        </div>

    )
}
