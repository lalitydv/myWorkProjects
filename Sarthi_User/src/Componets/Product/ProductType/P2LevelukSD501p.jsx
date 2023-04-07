import React from "react";
import product1 from "../../../images/product-img-15.jpg";
import fullcolor from "../../../images/product-img-16.jpg";
import contentimgproductplates from "../../../images/content-img-product-plates.jpg";
import ELGHI from "../../../images/product-img-18.jpg";
import Footer from "../../Footer/Footer";
import CERTIFICATIONS from "../../CERTIFICATIONS/CERTIFICATIONS";

import Calltoaction from "../../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../../Contectus/ContectUsForProduct/ContectPro";

const P2LevelukSD501p = () => {
  return (
    <>
      <div className="Sd501P">
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-primary">
                  THE ULTIMATE HOME USE MODEL PLATINUM
                </h3>
                <p className="text-green">100% clear water everyday.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="fs-2 container-lg p-2 text-justify  text-center product1 ">
        Used and loved throughout 82 countries, the LeveLuk SD501 Platinum now
        comes in ONE machine capable of speaking all notifications in FIVE
        languages! English, German, French, Italian, Spanish
      </div>
      <div className="p-5 fs-5  container-lg text-justify ">
        Fully-equipped with a built-in electrolysis chamber, and featuring a
        large LCD panel and clear voice prompts, the SD501 PLATINUM is the
        leader of the pack. 7-Platinum-plated Titanium plates comprise the
        electrolysis chamber.
      </div>
      {/* ---------------- */}
      <div className=" d-flex flex-row row gy-5 justify-content-around  ">
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white border zoom  rounded-lg"
          style={{ width: "20rem" }}
        >
          <img src={product1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Powerful Performance</h2>
            <p className="card-text">
              The all new Platinum features a revamped modern design that
              coordinates beautifully with today's stylish kitchens.
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
              The SD501 is extremely user-friendly, thanks to a large LCD panel
              and clear voice prompts.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom  "
          style={{ width: "20rem" }}
        >
          <img src={contentimgproductplates} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">7 Titanium Plates</h2>
            <p className="card-text ">
              The secret is contained inside, with seven platinum-coated
              titanium plates
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded ml-5 zoom "
          style={{ width: "20rem" }}
        >
          <img src={ELGHI} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Speaks FIVE Languages!</h2>
            <p className="card-text">
              8 Language Display and Audio in Japanese, English, French, German,
              Chinese, Italian, Spanish and Portuguese
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
                The SD501p is extremely
                <div class="fw-bold">user-friendly!</div>
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

export default P2LevelukSD501p;
