import React from "react";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Componets/Home/Home";
import Products from "./Componets/Product/Products";
import Navbarcomponet from "./Navbar/Navbar";
import Download from "./Componets/Download/Download";
import Healthbenefits from "./Componets/Healthbenefits/Healthbenefits";
import Contect from "./Componets/Contectus/Contect";
import P1LevelukK8 from "./Componets/Product/ProductType/P1Leveluk K8";
import P2LevelukSD501p from "./Componets/Product/ProductType/P2LevelukSD501p";
import P3LevelukSD501 from "./Componets/Product/ProductType/P3LevelukSD501";
import P4LevelukSuper501 from "./Componets/Product/ProductType/P4 Leveluk Super501";
import P5LevelukJRIV from "./Componets/Product/ProductType/P5Leveluk JR IV";
import P6LevelukSD501U from "./Componets/Product/ProductType/P6 LevelukSD501U";
import P7AnespaDX from "./Componets/Product/ProductType/P7AnespaDX";
import Notfound from "./Componets/Notfound/Notfound";
import CtaButton from "./Componets/CTA Buttton/CtaButton";
import GetEnquiry from "./Componets/CTA Buttton/GetEnquiry";
import Photogallary from "./Componets/Photo/Photogallary";
import Testimonial from "./Componets/Testimonial/Testimonial";
import { handelRightClick } from "../src/Componets/utils/Desbalrightclick";
import Navbarcomponet2 from "./Navbar/Navbar2";

function App() {
  // document.addEventListener("contextmenu", handelRightClick);
  return (
    <div className="unselectable">
      <Navbarcomponet />
      {/* <Navbarcomponet2 /> */}
      <br />
      <br />
      <br />
      <CtaButton />
      <GetEnquiry />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/LevelukK8" element={<P1LevelukK8 />} />
        <Route path="/P2LevelukSD501p" element={<P2LevelukSD501p />} />
        <Route path="/P3LevelukSD501" element={<P3LevelukSD501 />} />
        <Route path="/P4LevelukSuper501" element={<P4LevelukSuper501 />} />
        <Route path="/P5LevelukJRIV" element={<P5LevelukJRIV />} />
        <Route path="/P6LevelukSD501U" element={<P6LevelukSD501U />} />
        <Route path="/P7AnespaDX" element={<P7AnespaDX />} />
        <Route path="/download" element={<Download />} />
        <Route path="/healthbenefit" element={<Healthbenefits />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/OurTeam" element={<Photogallary />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
