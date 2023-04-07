import { useState } from "react";
import Footer from "../Footer/Footer";
import "./css_slider.css";
// import Whatdo from "../../images/a2.jpg";
import Whatdo from "../../images/machin3Home.png";
// import whyus from "../../images/a1.jpg";
import whyus from "../../images/fontaine-kangen-en-cours-d-utilisation-1920w.jpg";
import CERTIFICATIONS from "../CERTIFICATIONS/CERTIFICATIONS";
import Carousel from "react-bootstrap/Carousel";
import machin3 from "../../images/machin3.png";
import LevelukK8 from "../../images/Machins/LevelukK8-min.png";
import LeveLukSD501Platinum from "../../images/Machins/LeveLuk SD501 Platinum-min.png";
import LeveLukSD501 from "../../images/Machins/LeveLuk SD501-min.png";
import LeveLukSuperSD501 from "../../images/Machins/LeveLuk Super SD501-min.png";
import LevelukJRIV2 from "../../images/Machins/Leveluk JR IV-min.png";
import LevelukSD501U2 from "../../images/Machins/Leveluk SD501U-min.png";
import ANESPADX2 from "../../images/Machins/ANESPA DX-min.png";

import Sd501p from "../../images/Sd501P.jpg";
import Sd501 from "../../images/banner-img-product-sd501.jpg";
import super501 from "../../images/banner-img-product-super501.jpg";
import LevelukJRIV from "../../images/banner-img-product-jr4.jpg";
import LevelukSD501U from "../../images/banner-img-product-sd501u.jpg";
import AnespaDX from "../../images/banner-img-product-anespa.jpg";
import Sd501top from "../../images/slideshow-img-05.jpg";
import Subscribe from "../subscribepage/Subscribe";

// import AnespaDX from "../../images/banner-img-product-anespa.jpg";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      

      <Carousel className="banner_slide_bg ">
        <Carousel.Item>
          <img className="d-block w-100" src={machin3} alt="First slide" />
          <Carousel.Caption>
            <div className="container mb">
              <div className="w3ls_banner_txt">
                <h3 className="w3ls_pvt-title">
                  the best water right at your home
                </h3>
                <h1 className=" subline_home  ">
                  change your water change your life
                </h1>
              </div>
            </div>

            {/* <h2 className="w3pvt-title">LevelukK8</h2>
            <p className="text-primary">
              You can enjoy this kangen  Water® machine
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sd501p} alt="First slide" />
          <Carousel.Caption>
            <div className="container">
              <div className="w3ls_banner_txt">
                <h3 className="w3ls_pvt-title">
                  the best water right at your home
                </h3>
                <h1 className=" subline_home">
                  change your water change your life
                </h1>
              </div>
            </div>
            {/* <h2 className="w3pvt-title">LeveLuk SD501 Platinum </h2>
            <p className="text-primary">
              You can enjoy this kangen  Water® machine
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={Sd501top} alt="First slide" />
          <Carousel.Caption>
            <div className="container">
              <div className="w3ls_banner_txt ml-0 text-left">
                <h3 className="w3ls_pvt-title text-white">
                  the best water right at your home
                </h3>

                <h1 className="  text-white font-weight-900  subline_home">
                  change your water change your life
                </h1>
              </div>
            </div>
            {/* <h2 className="w3pvt-title">LeveLuk SD501</h2>
            <p className="text-primary">
              You can enjoy this kangen  Water® machine
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={super501} alt="First slide" />
          <Carousel.Caption>
            <div className="container">
              <div className="w3ls_banner_txt">
                <h3 className="w3ls_pvt-title mt-0">
                  the best water right at your home
                </h3>
                <h1 className=" subline_home">
                  change your water change your life
                </h1>
              </div>
            </div>
            {/* <h2 className="w3pvt-title">Leveluk Super501</h2>
            <p className="text-primary">
              You can enjoy this kangen  Water® machine
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* slider end  */}
      {/* about start  */}
      <section className="wthree-row py-md-5" id="about">
        <div className="container py-lg-5">
          <div className="row abbot-main py-lg-5 py-4">
            <div className="col-lg-4 abbot-right mt-lg-0 mt-3">
              <img src={Whatdo} className="img-fluid img-thumbnail" alt="" />
            </div>
            <div className="offset-lg-1 col-lg-7 ">
              {/* <span className="sub-title">add your caption here</span> */}
              <h4 className="w3pvt-title">What is Kangen Water?</h4>
              <p className="mt-3 text-justify">
        Kangen Water is a brand of Ionized Alkaline Water made by the Enagic Ionizer company. Kangen water promises great health benefits, such as balancing out pH levels in the body. Kangen comes from the Japanese word that translates to “return to origins”. When we drink this alkaline ionized water, we are returning to our roots - removing toxins and acidity from our bodies. 
              </p>
              <p className="my-4">
             
Kangen water is made by putting tap water through a unique machine called an ionizing device which separates alkaline substances from acidic ones and then it delivers them to separate spouts - these machines can turn regular tap water into great-tasting drinking water that contains antioxidants for you and your family's good health! Use Kangen-treated water for cooking, beauty products, or even household cleaning tasks!

              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about end  */}
      {/* <!-- why us --> */}
      <section className="wthree-row pb-md-5" id="why">
        <div className="container pb-lg-5 pb-4">
          <div className="row abbot-main flex-row-reverse">
            <div className="offset-lg-1 col-lg-4 abbot-right mt-lg-0 mt-3">
              <img src={whyus} className="img-fluid img-thumbnail" alt="" />
            </div>
            <div className="col-lg-7 ">
              {/* <span className="sub-title">add your caption here</span> */}
              <h4 className="w3pvt-title">Health Benefits of Kangen Water</h4>
              <p className="mt-3">
               With the rising popularity of bottled water and filter-equipped homes, fewer people need to worry about drinking tap or well water. 
              </p>
              <p className="my-4">
               
But too many people still don't know that there are different types of drinking water—discover how Kangen water can change your life! So what exactly are alkaline waters? What's this fuss about them anyway? 

              </p>
              <p className="my-4">
           Let's take a closer look at how they benefit you and your everyday living habits now.
              </p>
              <a
                href="healthbenefit"
                class="text-capitalize serv_link btn bg-theme scroll"
              >
                view more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //why us --> */}

      {/* --------------slider-----start---- */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="container "
      >
        <Carousel.Item>
          <img className="d-block w-100" src={LevelukK8} alt="First slide" />
          <Carousel.Caption className="sildersecomd">
            {/* <h2 className="w3pvt-title">LevelukK8</h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LeveLukSD501Platinum}
            alt="First slide"
          />
          <Carousel.Caption className="sildersecomd">
            {/* <h2 className="w3pvt-title">LeveLuk SD501 Platinum </h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={LeveLukSD501} alt="First slide" />
          <Carousel.Caption className="sildersecomd">
            {/* <h2 className="w3pvt-title">LeveLuk SD501</h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LeveLukSuperSD501}
            alt="First slide"
          />
          <Carousel.Caption className="sildersecomd">
            {/* <h2 className="w3pvt-title">Leveluk Super501</h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={LevelukJRIV2} alt="First slide" />
          <Carousel.Caption className="sildersecomd text-white">
            {/* <h2 className="w3pvt-title">Leveluk JR IV</h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LevelukSD501U2}
            alt="First slide"
          />
          <Carousel.Caption className="sildersecomd">
            {/* <h2 className="w3pvt-title">Leveluk SD501U</h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ANESPADX2} alt="First slide" />
          <Carousel.Caption className="sildersecomd">
            {/* <h2 className="w3pvt-title">Anespa DX</h2>
            <h6 className="text-primary">
              You can enjoy this kangen Water® machine
            </h6> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      {/* --------------slider-----end---- */}
      <CERTIFICATIONS />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
