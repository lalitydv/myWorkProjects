// P6LevelukSD501U

import React from "react";
import product1 from "../../../images/product-img-sd501u-1.jpg";
import fullcolor from "../../../images/product-img-sd501u-2.jpg";
import contentimgproductplates from "../../../images/content-img-product-plates (2).jpg";
import ELGHI from "../../../images/product-img-super501-3.jpg";
import Footer from "../../Footer/Footer";
import CERTIFICATIONS from "../../CERTIFICATIONS/CERTIFICATIONS";

import Calltoaction from "../../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../../Contectus/ContectUsForProduct/ContectPro";

const P6LevelukSD501U = () => {
  return (
    <>
      <div className="LevelukSD501U">
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-white">
                  THE UNDER‑THE‑COUNTER MODEL
                </h3>
                <p className="text-green">100% clear water everyday.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="fs-2 container-lg p-3  text-center text-justify product1 ">
        If you could use a little more free counter space, this is the perfect
        unit for your kitchen! With the quality and power of the SD501, but the
        convenience of nestling discreetly under your sink.
      </div>
      <div className="p-3 fs-5  container-lg text-center text-justify ">
        This Enagic machine is both practical and highly accommodating. You will
        still enjoy a fully featured, compact LCD control panel that is
        wall-mounted.
      </div>
      {/* ---------------- */}
      <div className=" d-flex flex-row row gy-5 justify-content-around  ">
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white border zoom  rounded-lg"
          style={{ width: "20rem" }}
        >
          <img src={product1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Quality and Power</h2>
            <p className="">
              Enjoy the quality and power of the SD501 right at your kitchen
              sink - without sacrificing valuable counter space!
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom rounded ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={fullcolor} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Wall-Mounted LCD Control Panel</h2>
            <p className="">
              You will still enjoy a fully featured, compact LCD control panel
              that is wall-mounted.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white  zoom "
          style={{ width: "20rem" }}
        >
          <img src={contentimgproductplates} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">7 Titanium Plates</h2>
            <p className="card-text ">
              Like all 501 models, the SD501 uses innovative electrolysis
              technology with 7 platinum-coated 99.97% pure titanium electrode
              plates.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom rounded ml-5 "
          style={{ width: "20rem", display: "none" }}
        >
          <img src={ELGHI} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Industrial Strength</h2>
            <p className="card-text">
              The Super501 features the same quality built-in electrolysis
              enhancer tank as the SD501,
            </p>
          </div>
        </div>
      </div>
      {/* ---------------- */}
      <section class="wthree-row py-md-5" id="about">
        <div class="container py-lg-5">
          <div class="row abbot-main py-lg-5 py-4">
            <div class="col-lg-4 abbot-right mt-lg-0 mt-3">
              <div class="display-3 text-center">
                Both practical and highly
                <div class="fw-bold">accomodating</div>
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

export default P6LevelukSD501U;
