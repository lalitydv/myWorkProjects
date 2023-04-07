import React from "react";

import About from "../homeComponents/about/about";
import Blog from "../homeComponents/blog/blog";
import Servics from "../homeComponents/services/servics";
import Galary from "../homeComponents/galary/galary";
import Work from "../homeComponents/work/work";
import Product from "../homeComponents/product/product";
import Detail from "../homeComponents/detail/detail";
import Header from "../homeComponents/header/header";
import Layout from "../components/layout";
import Slide from "../homeComponents/sliderold/slide";

const Home = () => {
  return (
    <>
    <Layout>
      <Header />
      <About />
      <Servics />
      <Work />
      <Product />
      {/* <Slide /> */}
      {/* <Detail /> */}
      </Layout>
    </>
  );
};

export default Home;
