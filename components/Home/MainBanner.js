import React from 'react'

export default function MainBanner() {
    return (
       <div className="main-banner">
  <div className="container">
    <div className="row justify-">
      <div className="col-lg-6 align-self-center">
        <div className="caption header-text">
          <h3 style={{color : '#FFF'}}> Welcome To Site</h3>
          <h2>بهترین سایت گیمینگ!</h2>
          <p>
          LUGX Gaming یک قالب وب سایت بوت استرپ 5 HTML CSS رایگان برای وب سایت های بازی شما است. شما می توانید این طرح را برای مقاصد تجاری دانلود و استفاده کنید. لطفا به دوستان خود در مورد TemplateMo اطلاع دهید.
          </p>
          <div className="search-input">
            <form id="search" action="#">
              <input type="text" placeholder="چیزی بنویسید" id="searchText" name="searchKeyword"  />
              <button role="button">جستجو کنید</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-2">
        <div className="right-image">
          <img src="images/banner-image.jpg" alt />
          <span className="price">$22</span>
          <span className="offer">-40%</span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
