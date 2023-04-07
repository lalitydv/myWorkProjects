import React from 'react'
import "./servics.css"
import img1 from "../../img/services/facemask.png"
import img2 from "../../img/services/faceserum.png"
import img3 from "../../img/services/lipandchick.png"
import img4 from "../../img/services/shampoo.png"
const Servics = () => {
  return (
   <>  
    <section className="services set-bg spad">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                <div className="section-title">
                    <span>Best makeup services</span>
                    <h2>Professional makeup</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="services__item">
                        <div className="services__item__pic">
                        <img src={img1} alt="" data-pagespeed-url-hash="1221547530" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                        </div>
                        <div className="services__item__text">
                        <h5>Face Mask</h5>
                        {/* <span>From $20.0</span> */}
                        </div>
                    </div>
                </div>
            <div className="col-lg-3 col-md-6">
                <div className="services__item services__item__top">
                    <div className="services__item__text">
                    <h5>Face Serum</h5>
                    {/* <span>From $50.0</span> */}
                    </div>
                    <div className="services__item__pic">
                    <img src={img2} alt="" data-pagespeed-url-hash="1516047451" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="services__item">
                    <div className="services__item__pic">
                    <img src={img3} alt="" data-pagespeed-url-hash="1810547372" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                    <div className="services__item__text">
                    <h5>Lip And Cheeck</h5>
                    {/* <span>From $30.0</span> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="services__item services__item__top">
                    <div className="services__item__text">
                        <h5>Shampoo</h5>
                        {/* <span>From $70.0</span> */}
                    </div>
                    <div className="services__item__pic">
                        <img src={img4} alt="" data-pagespeed-url-hash="2105047293" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default Servics