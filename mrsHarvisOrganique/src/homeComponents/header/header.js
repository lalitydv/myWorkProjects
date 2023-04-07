import React from "react";
import header from "../../img/HarvisImg/productbanner.png";

const Header = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <img width="100%" src={header} />
        </div>
      </section>
    </>
  );
};

export default Header;
