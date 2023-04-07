import React from 'react'
import './about.css'
import aboutPic from "../../img/about/test.png"

const About = () => {
  return (
   <>
    <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about__text">
                        <div className="section-title">
                            <span>Make your face</span>
                            <h2 className='font-style'>the center of attention.</h2>
                        </div>
                        <p>My love of makeup started young while often sneaking into my mother's makeup vanity and playing with various shades of lipstick, eyeshadow and blush. Makeup became a full blown obsession after four years of art school where I learned to master the airbrush technique.</p>
                        {/* <button className="contact-btn">Contact us</button> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about__pic">
                        <img className='about_bg_img' src={aboutPic} alt="" data-pagespeed-url-hash="2562920791" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default About