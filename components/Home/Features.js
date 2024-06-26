import React from 'react'

export default function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <a href="#">
                            <div className="item">
                                <div className="image">
                                <img src="images/featured-02.png" alt style={{ maxWidth: '44px' }} />
                                </div>
                                <h4>ارزان ترین ها</h4>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#">
                            <div className="item">
                                <div className="image">
                                    <img src="images/featured-02.png" alt style={{ maxWidth: '44px' }} />
                                </div>
                                <h4>پشتیبانی سریع</h4>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#">
                            <div className="item">
                                <div className="image">
                                    <img src="images/featured-03.png" alt style={{ maxWidth: '44px' }} />
                                </div>
                                <h4>نماد اعتماد</h4>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#">
                            <div className="item">
                                <div className="image">
                                    <img src="images/featured-04.png" alt style={{ maxWidth: '44px' }} />
                                </div>
                                <h4>دسترسی راحت</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
