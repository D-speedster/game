import React from 'react'

export default function MainBanner() {
    return (
       <div className="main-banner">
  <div className="container">
    <div className="row justify-">
      <div className="col-lg-6 align-self-center">
        <div className="caption header-text">
          <h3 style={{color : '#FFF'}}>فروشگاه اسپارتا</h3>
          <h2>  دنیای بازی‌ها را فتح کنید!</h2>
          <p>
          در فروشگاه اسپارتا، بهشت گیمرها، می‌توانید جدیدترین بازی‌ها، کنسول‌های بازی و کیس‌های گیمینگ را با بهترین قیمت و کیفیت تهیه کنید. ما با ارائه خدمات متنوع و پشتیبانی حرفه‌ای، تجربه‌ای لذت‌بخش از خرید را برای شما رقم می‌زنیم.

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
