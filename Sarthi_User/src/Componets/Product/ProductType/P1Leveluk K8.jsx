import React from "react";
import machin1 from "../../../images/machin1.jpg";
import fullcolor from "../../../images/fullcolor.jpg";
import contentimgproductplates from "../../../images/content-img-product-plates.jpg";
import ELGHI from "../../../images/ELGHIjpg.jpg";
import Footer from "../../Footer/Footer";
import CERTIFICATIONS from "../../CERTIFICATIONS/CERTIFICATIONS";
import Calltoaction from "../../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../../Contectus/ContectUsForProduct/ContectPro";

const P1LevelukK8 = () => {
  return (
    <>
      <div className="bag-image">
        <ul className="banner_slide_bg">
          <li>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-primary">
                  THE MIGHTY 8‑PLATE ANTI‑OXIDIZER
                </h3>
                <p className="text-green">100% clear water everyday.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="fs-2 container-lg p-2   text-justify product1 ">
        The K8 (Kangen 8) is Enagic's most powerful antioxidant machine -
        featuring 8 platinum-dipped titanium plates for improved water
        ionization and increased antioxidant production potential.
      </div>
      <div className="p-2 fs-5  container-lg  text-justify ">
        You can enjoy this Kangen Water® machine in any country, thanks to its
        worldwide multi-voltage power supply and interchangeable plug capability
        (sold separately). If you're looking for a powerful and versatile
        machine with plenty of user-friendly and energy-saving automated
        features, the K8 is for you.
      </div>
      {/* ---------------- */}
      <div className=" d-flex flex-row row gy-5 justify-content-around  ">
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white border zoom  rounded-lg"
          style={{ width: "20rem" }}
        >
          <img src={machin1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Higher Antioxidant Power</h2>
            <p className="card-text">
              The mighty K8 is a mighty antioxidant producer! The K8 water.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded zoom ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={fullcolor} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Full Color LCD Panel</h2>
            <p className="card-text">
              The K8 is extremely user-friendly, thanks to a large full color
              LCD panel and clear voice prompts.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white zoom  "
          style={{ width: "20rem" }}
        >
          <img src={contentimgproductplates} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">8 Titanium Plates</h2>
            <p className="card-text ">
              The K8 is similar to Enagic's Flagship SD501, but it contains an
              extra platinum-coated titanium plate.
            </p>
          </div>
        </div>
        <div
          className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded zoom ml-5 "
          style={{ width: "20rem" }}
        >
          <img src={ELGHI} class="card-img-top" alt="..." />
          <div className="card-body">
            <h2 className="card-title">Speaks EIGHT Languages!</h2>
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
                The K8 is full of new
                <div class="fw-bold">user-friendly features!</div>
              </div>
            </div>
            <div class="offset-lg-1 col-lg-7  about-text-grid">
              <div>
                <h4 class="w3pvt-title">Auto On/Off</h4>

                <p>
                  The smart Kangen® shuts down on it's own to conserve energy
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Plug & Play</h4>
                <p>
                  No more switch! Just plug the machine in and start generating
                  water.
                </p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Automatic Cleaning</h4>
                <p>Water drains for 10 seconds after 10 minutes of use</p>
              </div>
              <br />
              <br />
              <div>
                <h4 class="w3pvt-title">Smart Filter Technology</h4>
                <p>
                  Let your machine tell you when it's time to change filters
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

export default P1LevelukK8;
