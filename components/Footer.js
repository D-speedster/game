import React from 'react'

export default function Footer() {
    return (
        <footer className='pt-5'>
            <div className="container">
                {/* <div className='footer-head'>

                    <div className='container'>
                        <div className='row mt-4 mb-3'>
                            <div className='col'>
                                <div className='footer-item'>

                                    <i className='fab fa-telegram'></i>
                                </div>

                            </div>
                            <div className='col'>
                                <div className='footer-item'>

                                    <i className='fab fa-telegram'></i>
                                </div>

                            </div>
                            <div className='col'>
                                <div className='footer-item'>

                                    <i className='fab fa-telegram'></i>
                                </div>

                            </div>
                            <div className='col'>
                                <div className='footer-item'>

                                    <i className='fab fa-telegram'></i>
                                </div>

                            </div>

                        </div>
                    </div>

                </div> */}

                <div className='row'>
                    <div className='col-lg-5'>
                        <div className='row mt-2'>
                            <div className='col'>
                                <ul style={{ color: '#FFF' }}>
                                    <li>شرایط و قوانین</li>
                                    <li>ثبت شکایات </li>
                                    <li>تماس با ما</li>
                                    <li>درباره ما</li>
                                    <li>تبلیغات</li>
                                    <li>پرداخت سریع</li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul style={{ color: '#FFF' }}>
                                    <li>خرید بازی PS5</li>
                                    <li>خرید بازی PS4</li>
                                    <li>خرید بازی xbox</li>
                                    <li>خرید کنسول</li>
                                    <li>خرید کیس</li>
                                    <li>راهنمای خرید</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7 float-end'>
                        <div className='row'>
                        <div className='col-lg-6'>
                                <div className='describe-footer '>

                                    <div className='LogoWeb d-flex ' style={{ marginTop: '5px' }}>
                                        <img src='/images/Logo5.png' style={{ height: '55px', width: '55px', aspectRatio: '1.5' }} />
                                        <span className='mt-3' style={{ fontWeight: '600', color: '#FFF', fontSize: '14px' }}> فروشگاه اسپارتا بازی، لوازم جانبی و گیفت کارت</span>
                                    </div>
                                    <br />
                                    <div className='logos d-flex justify-content-between'>
                                        <img src='/images/enamad.jpg' />
                                        <img src='/images/samandehi.png' />
                                        <img src='/images/zarinpal.png' />
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <h5 style={{color : '#FFF'}}>عضویت در خبرنامه</h5>
                                <div class="input-group mt-3">
                                    <button class="btn btn-success" id="inputGroup-sizing-default">عضویت</button>
                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                            </div>
                          

                        </div>
                    </div>
                </div>
               <br/>
               <br/>



            </div>
            <div className='text-center' style={{ backgroundColor: '#051529 !important', width: '100%', height: '70px' }}>
                <div className='container pt-3 '>
                    <strong style={{ color: '#FFF' }}>⚡️ طراحی شده توسط speedster ⚡️</strong>
                </div>
            </div>

        </footer>

    )
}
