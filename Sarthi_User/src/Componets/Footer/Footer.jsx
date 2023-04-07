import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
function Footer() {
  return (
    <div>
      <footer className="bg-theme1">
        <div className="container">
          <div className="cpy-right">
            <div className="row">
              <div className="col-lg-6">
                <div className="wthree-social">
                  <ul>
                    <li>
                      {/* href="https://www.facebook.com/SaarthiMP09"
                            target="_blank" */}
                      {/* <Link   href="https://www.facebook.com/SaarthiMP09">
                        <span className="fa fa-facebook-f icon_facebook zoom"></span>
                      </Link> */}
                      <a
                        href="https://www.facebook.com/SaarthiMP09"
                        target="_blank"
                      >
                        <span className="fa fa-facebook-f icon_facebook zoom"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/indoresaarthi/"
                        target="_blank"
                      >
                        <span className="fa fa-instagram icon_instagram zoom"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/saarthi-indore"
                        target="_blank"
                      >
                        <span className="fa fa-linkedin icon_linkedin zoom"></span>
                      </a>
                    </li>
                    {/* <li>
                      <a href="">
                        <span className="fa fa-twitter icon_twitter zoom"></span>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-lg-right mt-lg-0 mt-4  justify-content-center">
                <p className="text-white">
                  © 2022 KangenSaarthi Water. All rights reserved | Design by
                  <a href="https://test1.cerbosys.com/" target="_blank">
                    Cerbosys
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
