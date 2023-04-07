// P7AnespaDX

import React from "react";
import product1 from "../../../images/product-img-anespa-1.jpg";
import fullcolor from "../../../images/product-img-anespa-2.jpg";
import contentimgproductplates from "../../../images/product-img-anespa-3.jpg";
import ELGHI from "../../../images/product-img-super501-3.jpg";
import Calltoaction from "../../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../../Contectus/ContectUsForProduct/ContectPro";
import Footer from "../../Footer/Footer";
import CERTIFICATIONS from "../../CERTIFICATIONS/CERTIFICATIONS";

const P7AnespaDX = () => {
  return (
    <>
      <div className="AnespaDX">
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-white">
                  MINERAL ION WATER SPA
                </h3>
                <p className="text-green">100% clear water everyday.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="fs-2 container-lg p-3  text-center text-justify product1 ">
        The NEW exclusive ANESPA DX Home Spa System transforms your ordinary
        bathroom into a natural hot spring resort.
      </div>
      <div className="p-3 fs-5  container-lg text-center text-justify ">
        ANESPA DX produces a continuous stream of healthy ionized mineral water.
        With a new, larger ceramic cartridge that removes almost 100% of
        chlorine and other harmful substances in your tap water, and adds safe,
        moisturizing minerals that are healthy for your skin and hair. Enjoy a
        lovely shower or bath in ANESPA DX hot spring water!
      </div>
      {/* ---------------- */}
      <div className=" d-flex flex-row row gy-5 justify-content-around  ">
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white border zoom  rounded-lg"
          style={{ width: "20rem" }}
        >
          <img src={product1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Your Home Spa System</h2>
            <p className="">
              Treat yourself to a soothing hot spring experience with the ANESPA
              DX! With an abundant flow of mineralized water and a relaxing
              massage shower head, your bathroom can instantly turn into a
              calming hot spring oasis. Generates: Mineral ion water for your
              bath or shower.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom rounded ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={fullcolor} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Removes Harmful Substances</h2>
            <p className="">
              The cartridge purification system effectively removes chlorine and
              bacteria, leaving you with a fresh, invigorating feeling. Protect
              your delicate skin from the harmful effects of tap water. Active
              charcoal filter Futama-ceramic inner filter.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom  "
          style={{ width: "20rem" }}
        >
          <img src={contentimgproductplates} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Mineral Ion Water</h2>
            <p className="card-text ">
              Contains a blend of natural hot spring ingredients and minerals,
              giving you the feeling that you're enjoying a pleasant hot spring
              and taking advantage of the mineral ion water. Relax and enjoy!
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded ml-5 zoom "
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
                The Ultimate
                <div class="fw-bold">Home Spa Experience</div>
              </div>
            </div>
            <div class="offset-lg-1 col-lg-7  about-text-grid">
              <div>
                <h4 class="w3pvt-title">Tufa</h4>

                <p>
                  A mineral stone taken directly from the Futamata Radium Hot
                  spring in Hokkaido, Japan. This stone gives the water the same
                  gentle and relaxing effect of a hot spring.
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">MIC stone</h4>
                <p>
                  Generates activated mildly alkaline water which is good for
                  your skin.
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Power stone</h4>
                <p>Generates strong negative-ions.</p>
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

export default P7AnespaDX;
