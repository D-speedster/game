import React from 'react'

export default function MainBanner() {
    return (
       <div className="main-banner">
  <div className="container">
    <div className="row justify-">
      <div className="col-lg-6 align-self-center">
        <div className="caption header-text">
          <h3 style={{color : '#FFF'}}>فروشگاه اسپارتا</h3>
          <h2> بزرگ ترین مرجع گیم!</h2>
          <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
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
