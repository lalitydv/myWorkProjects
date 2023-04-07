import { useState } from "react";
import machin2 from "../../images/machin2.jpg";
import machin3 from "../../images/banner-img-product-sd501.jpg";
import machin4 from "../../images/banner-img-product-super501.jpg";
import machin5 from "../../images/banner-img-product-jr4.jpg";
import machin6 from "../../images/banner-img-product-sd501u.jpg";
import machin7 from "../../images/banner-img-product-anespa.jpg";
import K8 from "../../images/k8.png";
import Sd501P from "../../images/Sd501P.jpg";
import sd501p from "../../images/sd501p.png";
import sd501 from "../../images/sd501.png";
import super501 from "../../images/super501.png";
import jr4 from "../../images/jr4.png";
import sd501u from "../../images/sd501u.png";
import anespa from "../../images/anespa.png";
import Footer from "../Footer/Footer";
import Calltoaction from "../Contectus/ContectUsForProduct/Calltoaction";
import ContectPro from "../Contectus/ContectUsForProduct/ContectPro";
function Products() {
  // const [isHovering1, setIsHovering1] = useState(false);
  // const handleMouseOver1 = () => {
  //   setIsHovering1(true);
  // };
  // const handleMouseOut1 = () => {
  //   setIsHovering1(false);
  // };
  // const [isHovering2, setIsHovering2] = useState(false);
  // const handleMouseOver2 = () => {
  //   setIsHovering2(true);
  // };
  // const handleMouseOut2 = () => {
  //   setIsHovering2(true);
  // };
  // const [isHovering3, setIsHovering3] = useState(false);
  // const handleMouseOver3 = () => {
  //   setIsHovering3(true);
  // };
  // const handleMouseOut3 = () => {
  //   setIsHovering3(true);
  // };
  return (
    <>
      <div>
        <h2 className="d-flex justify-content-center text-uppercase p-5    w3pvt-title ">
          MACHINES
        </h2>
      </div>

      <section className="wthree-row pb-md-5">
        <div className="container pb-lg-5 pb-4">
          <div className="row abbot-main flex-row-reverse">
            <div className="offset-lg-1 col-lg-9 abbot-right mt-lg-0 mt-3">
              <section className="portfolio_wthree py-lg-5">
                <div className="container">
                  <div className="row pb-5 text-center">
                    <div className="col-lg-4 col-sm-6 port-grid zoom">
                      <a href="LevelukK8">
                        <img
                          src={machin2}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 port-grid zoom">
                      <a href="P2LevelukSD501p">
                        <img
                          src={Sd501P}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 port-grid zoom">
                      <a href="P3LevelukSD501">
                        <img
                          src={machin3}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 port-grid mt-lg-4 zoom">
                      <a href="P4LevelukSuper501">
                        <img
                          src={machin4}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 port-grid mt-lg-4 zoom">
                      <a href="P5LevelukJRIV">
                        <img
                          src={machin5}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 port-grid mt-lg-4 zoom">
                      <a href="P6LevelukSD501U">
                        <img
                          src={machin6}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 port-grid mt-lg-4 view overlay zoom">
                      <a href="P7AnespaDX">
                        <img
                          src={machin7}
                          alt="news image"
                          className="img-fluid img-thumbnail "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-2   mt-lg-0 mt-3 d-flex justify-content-center">
              <div className="row ">
                <div className="col-lg-6">
                  <div className="mt-5  ">
                    <div
                    // onMouseOver={handleMouseOver1}
                    // onMouseOut={handleMouseOut1}
                    >
                      <a href="LevelukK8">
                        <img
                          src={K8}
                          alt=""
                          // className="img-fluid img-thumbnail"
                          className="zoom"
                        />
                      </a>
                    </div>
                    <br />
                    <div
                    // onMouseOver={handleMouseOver2}
                    // onMouseOut={handleMouseOut2}
                    >
                      <a href=" P2LevelukSD501p">
                        <img src={sd501p} alt="" className="zoom" />
                      </a>
                    </div>
                    <br />
                    <div
                    // onMouseOver={handleMouseOver3}
                    // onMouseOut={handleMouseOut3}
                    >
                      <a href="P3LevelukSD501">
                        <img src={sd501} alt="" className="zoom" />
                      </a>
                    </div>
                    <br />
                    <div>
                      <a href="P4LevelukSuper501">
                        <img src={super501} alt="" className="zoom" />
                      </a>
                    </div>
                    <br />
                    <div>
                      <a href="P5LevelukJRIV">
                        <img src={jr4} alt="" className="zoom" />
                      </a>
                    </div>
                    <br />
                    <div>
                      <a href="P6LevelukSD501U">
                        <img src={sd501u} alt="" className="zoom" />
                      </a>
                    </div>
                    <br />
                    <div>
                      <a href="P7AnespaDX">
                        <img src={anespa} alt="" className="zoom" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* ------------------ */}

                {/* <div className="col-lg-6">
                  {isHovering1 && (
                    <div>
                      <a href="LevelukK8">
                        <img
                          src={machin2}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <br />
                      <br />
                      <div>
                        The K8 (Kangen 8) is Enagic's most powerful antioxidant
                        machine - featuring 8 platinum-dipped titanium plates
                        for improved water ionization and increased antioxidant
                        production potential.
                      </div>
                    </div>
                  )}
                  {isHovering2 && (
                    <div>
                      <a href="P2LevelukSD501p">
                        <img
                          src={Sd501P}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <div>
                        Used and loved throughout 82 countries, the LeveLuk
                        SD501 Platinum now comes in ONE machine capable of
                        speaking all notifications in FIVE languages! English,
                        German, French, Italian, Spanish
                      </div>
                    </div>
                  )}
                  {isHovering3 && (
                    <div>
                      <a href="P3LevelukSD501">
                        <img
                          src={machin3}
                          alt="news image"
                          className="img-fluid img-thumbnail"
                        />
                      </a>
                      <div>
                        Used and loved throughout 82 countries, the LeveLuk
                        SD501 Platinum now comes in ONE machine capable of
                        speaking all notifications in FIVE languages! English,
                        German, French, Italian, Spanish
                      </div>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container-lg">
        The Mighty 8-Plate Anti-Oxidizer The K8 (Kangen 8) is now Enagic's most
        powerful antioxidant machine - featuring 8 platinum-dipped titanium
        plates! This additional electrode plate increases the electrolysis
        surface area, improves water ionization, and heightens the antioxidant
        production potential.
      </div> */}
      <Calltoaction />
      <ContectPro />
      <Footer />
    </>
  );
}

export default Products;
