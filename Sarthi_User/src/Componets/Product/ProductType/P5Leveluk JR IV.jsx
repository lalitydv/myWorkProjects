// P5LevelukJRIV

import React from "react";
import product1 from "../../../images/product-img-jr4-1-2x.jpg";
import fullcolor from "../../../images/product-img-jr4-2-2x.png";
import contentimgproductplates from "../../../images/content-img-product-plates (1).jpg";
import ELGHI from "../../../images/product-img-jr4-electrolysis.jpg";
import Footer from "../../Footer/Footer";
import CERTIFICATIONS from "../../CERTIFICATIONS/CERTIFICATIONS";

import Calltoaction from "../../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../../Contectus/ContectUsForProduct/ContectPro";

const P5LevelukJRIV = () => {
  return (
    <>
      <div className="LevelukJRIV">
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-primary">
                  THE ENERGY SAVER
                </h3>
                <p className="text-white">100% clear water everyday.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="fs-2 container-lg p-3  text-center text-justify product1 ">
        The JrIV has four solid electrode plates which reduces the energy
        consumption. Due to the solid platinum-coated titanium plates, this unit
        can still produce the strong acid and strong Kangen waters.
      </div>
      <div className="p-3 fs-5  container-lg text-center text-justify ">
        Due to the lower power consumption and fewer plates, this machine is
        only recommended for singles or couples. Families should consider one of
        the more robust models above due to the amount of output required.
      </div>
      {/* ---------------- */}
      <div className=" d-flex flex-row row gy-5 justify-content-around  ">
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white border zoom  rounded-lg"
          style={{ width: "20rem" }}
        >
          <img src={product1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">The Junior Model</h2>
            <p className="">
              The JrIV has four solid electrode plates, which reduces the energy
              consumption
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white  zoom rounded ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={fullcolor} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Super Easy to Use</h2>
            <p className="">
              With just a touch of a button, you can have access to any of the 4
              waters you choose
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom "
          style={{ width: "20rem" }}
        >
          <img src={contentimgproductplates} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">4 Titanium Plates</h2>
            <p className="card-text ">
              The JrIV has four solid electrode plates which reduces the energy
              consumption
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded zoom ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={ELGHI} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Electrolysis Enhancer Tank</h2>
            <p className="card-text">
              The built-in tank for the electrolysis enhancer saves you the
              trouble of putting in the electrolysis
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
                Starter model recommended only for
                <div class="fw-bold">singles or couples</div>
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

export default P5LevelukJRIV;
