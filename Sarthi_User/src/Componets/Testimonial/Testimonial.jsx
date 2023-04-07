import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonial.css";
import one from "../../images/1.jpg";
import Video1 from "../../Videos/Anita Chaturvedi Saarthi.mp4";
import Video2 from "../../Videos/Anil Rawat Sarthi.mp4";
import Pratima from "../../Videos/Pratima Sarthi RE.mp4";
import vide03 from "../../Videos/Anup sarthi RE.mp4";
import Contect_Health_Ben from "../Contectus/Contect_Health/Contect_Health_Ben";
import Footer from "../Footer/Footer";
import Anita from "../../images/portfolio/Anita Chaturvedi.png";
import Anil from "../../images/portfolio/Anil Rawat.png";
import PratimaJadon from "../../images/portfolio/Pratima Jadon.png";
import Anup from "../../images/portfolio/Anup vanawat.png";
function Testimonial() {
  return (
    <>
      <div className="text-center py-md-5 py-4">
        <h4 className="w3pvt-title">Testimonial</h4>
      </div>
      {/* Testimonal 1 start */}

      {/* <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <video width="320" height="240" controls>
            <source src={Video1} type="video/mp4" />
            <source src="Video1" type="video/ogg" />
          </video>
        </div>

        <div>
          <img src={one} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <video width="320" height="240" controls>
            <source src={Video2} type="video/mp4" />
            <source src="Video2" type="video/ogg" />
          </video>
        </div>

        <div>
          <img src={one} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel> */}
      {/* Testimonal 1 End */}

      {/* Testimonal 2 start */}
      <div class="container">
        <div class="row  text-center justify-content-center">
          {/* Anita Chaturvedi */}
          <div class="row mt-5  flex-column-reverse flex-lg-row">
            <div className="col-md ">
              <video
                className="videohightwidth"
                width="600px"
                height="300px"
                controls
              >
                <source src={Video1} type="video/mp4" />
                <source src="Video1" type="video/ogg" />
              </video>
            </div>
            <div className="col-md ">
              <div className="text-center  ">
                <img
                  src={Anita}
                  alt=""
                  className="  imageclassinTesti rounded-circle"
                />{" "}
              </div>
              <h5 class="card-title uppercase text-center mt-3">
                Anita Chaturvedi
              </h5>
            </div>
          </div>
          {/* Anil Rawat */}
          <div className="row mt-5 ">
            <div className="col-md">
              <div className="text-center  ">
                <img
                  src={Anil}
                  alt=""
                  className="  imageclassinTesti rounded-circle"
                />{" "}
              </div>
              <h5 class="card-title uppercase text-center mt-3">Anil Rawat </h5>
            </div>
            <div className="col-md">
              <video
                width="600px"
                className="videohightwidth"
                height="300px"
                controls
              >
                <source src={Video2} type="video/mp4" />
                <source src="Video2" type="video/ogg" />
              </video>
            </div>
          </div>
          {/* >Pratima Jadon */}

          <div className="row mt-5 flex-column-reverse flex-lg-row ">
            <div className="col-md">
              <video
                width="600px"
                className="videohightwidth"
                height="300px"
                controls
              >
                <source src={Pratima} type="video/mp4" />
                <source src="Pratima" type="video/ogg" />
              </video>
            </div>
            <div className="col-md">
              <div className="text-center  ">
                <img
                  src={PratimaJadon}
                  alt=""
                  className="  imageclassinTesti rounded-circle"
                />{" "}
              </div>
              <h5 class="card-title uppercase text-center mt-3">
                Pratima Jadon
              </h5>
            </div>
          </div>
          {/* Anup vanawat*/}
          <div className="row mt-5 ">
            <div className="col-md ">
              <div className="text-center  ">
                <img
                  src={Anup}
                  alt=""
                  className="  imageclassinTesti rounded-circle"
                />{" "}
              </div>
              <h5 class="card-title uppercase text-center mt-3">
                Anup vanawat{" "}
              </h5>
            </div>
            <div className="col-md">
              <video
                width="600px"
                className="videohightwidth"
                height="300px"
                controls
              >
                <source src={vide03} type="video/mp4" />
                <source src="vide03" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonal 2 End */}
      <hr />
      {/* Testimonal 3 start */}
      {/* <div class="container">
        <div class="row "> */}
      {/* Mam */}
      {/* <div class="row mt-5">
            <div className="col-md zoom">
              <video width="500px" height="300px" controls>
                <source src={Video2} type="video/mp4" />
                <source src="Video2" type="video/ogg" />
              </video>
            </div>
            <div className="col-md zoom">
              <video width="500px" height="300px" controls>
                <source src={Video1} type="video/mp4" />
                <source src="Video1" type="video/ogg" />
              </video>
            </div>
          </div> */}
      {/* Sir  */}
      {/* <div className="row mt-5  ">
            <div className="col-md zoom">
              <video width="500px" height="300px" controls>
                <source src={Video1} type="video/mp4" />
                <source src="Video1" type="video/ogg" />
              </video>
            </div>
            <div className="col-md zoom">
              <video width="500px" height="300px" controls>
                <source src={Video2} type="video/mp4" />
                <source src="Video2" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonal 3 End */}

      <Contect_Health_Ben />
      <Footer />
    </>
  );
}

export default Testimonial;
