import React from "react";
import Footer from "../Footer/Footer";
import "./Dowanload.css";
import pdfimage from "../../images/pdf.png";
import Bounce from "react-reveal/Bounce";
import Contect_Health_Ben from "../Contectus/Contect_Health/Contect_Health_Ben";

function Download() {
  return (
    <>
      <div>
        <h2
          className="d-flex justify-content-center text-uppercase p-5   w3pvt-title
 "
        >
          Download data
        </h2>
      </div>
      <h4 className="w3pvt-title text-center pb-5">
        download pdf and read more information about kangen water
      </h4>
      <div className="container">
        <div className=" d-flex flex-row row gy-5 justify-content-around   ">
          <Bounce left duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a
                href="PDFS/KangenWater uses.pdf"
                download="kangen Water uses.pdf"
              >
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3 ">
                    kangen Water uses
                  </div>
                </div>
              </a>
            </div>
          </Bounce>
          <Bounce left duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a
                href="PDFS/MEDICAL BENEFITS OF KANGEN WATER-converted.pdf"
                download="MEDICAL BENEFITS OF kangen  WATER-converted.pdf"
              >
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    Benefits of kangen
                  </div>
                </div>
              </a>
            </div>
          </Bounce>
          <Bounce left duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a
                href="PDFS/Enagic India Products 2020 _ 15-9-2020.pdf"
                download="kangen  India Products 2020 _ 15-9-2020.pdf"
              >
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    kangen India Products
                  </div>
                </div>
              </a>
            </div>
          </Bounce>
          <Bounce left duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a
                href="PDFS/kangen  Brochure -New.pdf"
                download="kangen  Brochure -New.pdf"
              >
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    kangen Brochure
                  </div>
                </div>
              </a>
            </div>
          </Bounce>
        </div>
        <div className=" d-flex flex-row row gy-5 justify-content-around  ">
          <Bounce right duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a
                href="PDFS/WQA-official-gold-seal-listing.pdf"
                download="WQA-official-gold-seal-listing.pdf"
              >
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    WQA
                  </div>
                </div>
              </a>
            </div>
          </Bounce>
          <Bounce right duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a
                href="PDFS/certificateofmedicaldevice.pdf"
                download="certificateofmedicaldevice.pdf"
              >
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    certificate
                  </div>
                </div>
              </a>
            </div>
          </Bounce>{" "}
          <Bounce right duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a href="PDFS/ISO-14001.pdf" download="ISO-14001.pdf">
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    ISO-14001
                  </div>
                </div>
              </a>
            </div>
          </Bounce>{" "}
          <Bounce right duration={3000}>
            <div
              className="card shadow-lg p-3 mb-5 ml-10 bg-white rounded  "
              style={{ width: "15rem" }}
            >
              <a href="PDFS/ISO-13485-1.pdf" download="ISO-13485-1.pdf">
                <img src={pdfimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title text-center fw-bolder text-dark fs-3">
                    ISO-13485
                  </div>
                </div>
              </a>
            </div>
          </Bounce>
        </div>
      </div>
      <Contect_Health_Ben />
      <Footer />
    </>
  );
}

export default Download;
