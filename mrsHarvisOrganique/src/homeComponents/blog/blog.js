import React from 'react';
import "./blog.css"
import img1 from '../../img/blog/blog-1.jpg'
import img2 from '../../img/blog/blog-2.jpg'
import img3 from '../../img/blog/blog-3.jpg'

const Blog = () => {
  return (
    <>
      <section className="latest-blog spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span>makeup Artist tips</span>
                <h2>Makeup artist tips</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={img1} alt="" data-pagespeed-url-hash="1593855082" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
                </div>
                <div className="blog__item__text">
                  <a to="#" className="blog__item__cat"><i className="fa fa-picture-o"></i></a>
                  <h4><a to="#">Tips From Makeup Artists You’ve Never Heard</a></h4>
                    <ul>
                      <li><span>Rosie Chapman</span></li>
                      <li>Jun 15, 2020</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={img2} alt="" data-pagespeed-url-hash="1888355003" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                </div>
                <div className="blog__item__text">
                  <a to="#" className="blog__item__cat"><i className="fa fa-file-text-o"></i></a>
                  <h4><a to="#">Everything I Learned From A Professional Makeup Artist</a></h4>
                  <ul>
                    <li><span>Rosie Chapman</span></li>
                    <li>Jun 15, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={img3} alt="" data-pagespeed-url-hash="2182854924" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                </div>
                <div className="blog__item__text">
                  <a to="https://www.youtube.com/watch?v=Pkh8UtuejGw" className="blog__item__cat video-popup"><i className="fa fa-play"></i></a>
                  <h4><a to="#">10 Makeup-Artist Tips That Surprised (and Delighted) Us</a></h4>
                  <ul>
                  <li><span>Rosie Chapman</span></li>
                  <li>Jun 15, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
</div>
</div>
</section>

    </>
  )
}

export default Blog