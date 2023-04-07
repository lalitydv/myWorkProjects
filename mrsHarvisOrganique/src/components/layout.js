import React from "react";
import Header from "./topbar/topbar";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;