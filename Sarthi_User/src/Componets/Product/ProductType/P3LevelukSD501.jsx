// P3LevelukSD501
import React from "react";
import product1 from "../../../images/product-img-sd501-1.jpg";
import fullcolor from "../../../images/product-img-sd501-2.jpg";
import contentimgproductplates from "../../../images/content-img-product-plates (1).jpg";
import ELGHI from "../../../images/product-img-sd501-3.jpg";
import Footer from "../../Footer/Footer";
import CERTIFICATIONS from "../../CERTIFICATIONS/CERTIFICATIONS";

import Calltoaction from "../../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../../Contectus/ContectUsForProduct/ContectPro";

const P3LevelukSD501 = () => {
  return (
    <>
      <div className="Sd501">
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-primary">
                  THE ULTIMATE HOME USE MODEL
                </h3>
                <p className="text-green">100% clear water everyday.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="fs-2 container-lg p-3  text-center text-justify product1 ">
        LeveLuk SD501 Enagic's Flagship Model The industry-leading continuous
        ionized electrolysis water generator system, the SD501 is the finest
        machine in its class.
      </div>
      <div className="p-3 fs-5  container-lg text-center text-justify ">
        With the strongest electrolysis chamber available, fully-equipped with a
        built-in electrolysis chamber, and featuring a large LCD panel and clear
        voice prompts, the SD501 is the leader of the pack.
      </div>
      {/* ---------------- */}
      <div className=" d-flex flex-row row gy-5 justify-content-around  ">
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white border zoom  rounded-lg"
          style={{ width: "20rem" }}
        >
          <img src={product1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">The Ultimate Home Use Model</h2>
            <p className="card-text">
              The SD501 is the finest machine in its class, with the highest
              quality built-in electrolysis chamber on the market.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom rounded ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={fullcolor} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Large LCD panel</h2>
            <p className="card-text">
              You can easily operate the SD501 thanks to a large LCD panel and
              clear voice prompts.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom "
          style={{ width: "20rem" }}
        >
          <img src={contentimgproductplates} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">7 Titanium Platess</h2>
            <p className="card-text ">
              The SD501 is Enagic's "Flagship" model because it provides
              additional stable oxygen, better micro-clustering, and higher
              negative ORP levels.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded zoom ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={ELGHI} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Compact!</h2>
            <p className="card-text">
              Although it is incredibly powerful, the SD501 is also very compact
              and perfectly suitable for your kitchen cabinet.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------- */}
      <section class="wthree-row py-md-5" id="about">
        <div class="container py-lg-5">
          <div class="row abbot-main py-lg-5 py-4">
            <div class="col-lg-4 abbot-right mt-lg-0 mt-3">
              <div class="display-2 text-center">
                The SD501 is the
                <div class="fw-bold">"Flagship"</div>
                <div>model and</div>
                <div class="fw-bold">#1 Seller!</div>
              </div>
            </div>
            <div class="offset-lg-1 col-lg-7  about-text-grid">
              <div>
                <h4 class="w3pvt-title">User Friendly</h4>

                <p>
                  With just a touch of a button, you can have access to any of
                  the 5 waters you choose.
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Automatic Cleaning</h4>
                <p>Periodically controlled by microcomputer.</p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Smart Filter Technology</h4>
                <p>
                  Let your machine tell you when it's time to change filters!
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Voice Confirmations</h4>
                <p>
                  Your machine will confirm the water you have selected with a
                  pleasant voice.
                </p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
      <Calltoaction />

      <CERTIFICATIONS />
      <ContectPro />
      <Footer />
    </>
  );
};

export default P3LevelukSD501;
