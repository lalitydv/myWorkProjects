import React from 'react'
import "./galary.css"
import img1 from '../../img/testimonial/quote-icon.png'
import img2 from '../../img/testimonial/ta-1.png'
import img3 from '../../img/testimonial/ta-1.png'

const Galary = () => {
  return (
   <>
   <div className="testimonial spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="testimonial__slider owl-carousel">
            <div className="testimonial__item">
              <div className="testimonial__item__icon">
              <img src={img1} alt="" data-pagespeed-url-hash="4045604849" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
              </div>
              <div className="testimonial__author">
                <div className="testimonial__author__pic">
                <img src={img2} alt="" data-pagespeed-url-hash="1828834360" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                </div>
                <div className="testimonial__author__text">
                <h5>Danielle Benton</h5>
                <span>Blogger/Client</span>
                </div>
              </div>
              <p>Rachel you are so amazing at what you do! Thank you so much for everything! I felt so beautiful on our wedding day. Not only are you superwoman with a makeup brush, you are so lovely and such a delight to have around the morning of the wedding!! Any bride would be very lucky to have you part of her big day, I am very grateful that you were part of mine</p>
            </div>
            <div className="testimonial__item">
              <div className="testimonial__item__icon">
              <img src="img/testimonial/quote-icon.png" alt="" data-pagespeed-url-hash="4045604849" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
              </div>
              <div className="testimonial__author">
                <div className="testimonial__author__pic">
                <img src={img3} alt="" data-pagespeed-url-hash="1828834360" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                </div>
                <div className="testimonial__author__text">
                <h5>Dani Alves</h5>
                <span>Blogger/Client</span>
                </div>
              </div>
              <p>Rachel you are so amazing at what you do! Thank you so much for everything! I felt so beautiful on our wedding day. Not only are you superwoman with a makeup brush, you are so lovely and such a delight to have around the morning of the wedding!! Any bride would be very lucky to have you part of her big day, I am very grateful that you were part of mine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
   </>
  )
}

export default Galary