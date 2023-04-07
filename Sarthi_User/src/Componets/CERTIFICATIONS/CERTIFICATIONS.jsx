import React from "react";
import "./certification.css";
import certif1 from "../../images/certif-img-01.png";
import certif2 from "../../images/certif-img-02.png";
import certif3 from "../../images/certif-img-03.png";
import certif4 from "../../images/certif-img-04.png";
import certif5 from "../../images/certif-img-05.png";
import certif6 from "../../images/certif-img-06.png";
import Bounce from "react-reveal/Bounce";
function CERTIFICATIONS() {
  return (
    <>
      {/* --------- CERTIFICATIONS------------ */}
      <div className="container">
        <div class="display-2 text-center fw-bold product1">CERTIFICATIONS</div>
        <p className="container-lg  text-justify text-center">
        Enagic International is ISO 9001, ISO 14001 and ISO 13485 certified for quality control and environmental management, a Water Quality Association Gold Seal  for product certification and a prominent member of the prestigious Direct Selling Association.


        </p>

        <div className=" d-flex flex-row row gy-5 justify-content-around container   p-5 ">
          <Bounce left duration={3000}>
            <div style={{ width: "10rem" }} className="zoom">
              <img src={certif1} alt="" />
            </div>
          </Bounce>
          <Bounce left duration={3000}>
            <div style={{ width: "10rem" }} className="zoom">
              <img src={certif2} alt="" />
            </div>
          </Bounce>
          <Bounce top duration={3000}>
            <div style={{ width: "10rem" }} className="zoom">
              <img src={certif3} alt="" />
            </div>
          </Bounce>
          <Bounce bottom duration={3000}>
            <div style={{ width: "10rem" }} className="zoom">
              <img src={certif4} alt="" />
            </div>
          </Bounce>
          <Bounce right duration={3000}>
            <div style={{ width: "10rem" }} className="zoom">
              <img src={certif5} alt="" />
            </div>
          </Bounce>
          <Bounce right duration={3000}>
            <div style={{ width: "10rem" }} className="zoom">
              <img src={certif6} alt="" />
            </div>
          </Bounce>
        </div>
      </div>
    </>
  );
}

export default CERTIFICATIONS;
