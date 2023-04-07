import React from 'react';
import './footer.css';
import logo from '../../img/logotest.png';
import img1 from '../../img/footer/footer1.png';
import img2 from '../../img/footer/footer2.png';
import img3 from '../../img/footer/footer3.png';
import img4 from '../../img/footer/footer4.jpg';
import img5 from '../../img/footer/footer5.jpg';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__contact">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__contact__item">
                  <div className="footer__contact__icon">
                    <div style={{ color: 'white' }}>
                      <GoLocation />
                    </div>
                  </div>
                  <h5>Address</h5>
                  <p>
                    <a href="">Indore, M.P. - INDIA</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__contact__item">
                  <div className="footer__contact__icon">
                    <div style={{ color: 'white' }}>
                      <BsTelephone />
                    </div>
                  </div>
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+9301870095">+9301870095</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__contact__item">
                  <div className="footer__contact__icon">
                    <div style={{ color: 'white' }}>
                      <HiOutlineMail />
                    </div>
                  </div>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:mrs.harvis.organique@gmail.com">
                      mrs.harvis.organique@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__content">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer__logo">
                  <a to="./index.html">
                    <img
                      src={logo}
                      alt=""
                      data-pagespeed-url-hash="2174608914"
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </a>
                  <h6>
                    Follow us on
                    <a
                      href="https://www.instagram.com/mrs.harvis.organique/"
                      target="_blank"
                    >
                      @harvisorganique
                    </a>
                  </h6>
                </div>
                <div className="footer__instagram__pic">
                  <img
                    src={img1}
                    alt=""
                    data-pagespeed-url-hash="683228349"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                  <img
                    src={img2}
                    alt=""
                    data-pagespeed-url-hash="977728270"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                  <img
                    src={img3}
                    alt=""
                    data-pagespeed-url-hash="1272228191"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                  <img
                    src={img4}
                    alt=""
                    data-pagespeed-url-hash="1566728112"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                  <img
                    src={img5}
                    alt=""
                    data-pagespeed-url-hash="1861228033"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-9 col-md-9">
                {/* <p className="footer__copyright__text">Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a to="https://colorlib.com" target="_blank" rel="nofollow noopener">Colorlib</a></p> */}
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="footer__copyright__social">
                  <a
                    href="https://www.facebook.com/profile.php?id=100070097925574"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                  <a to="#">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/mrs.harvis.organique/"
                    target="_blank"
                  >
                    <BsInstagram />
                  </a>
                  <a to="#">
                    <GrLinkedinOption />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
