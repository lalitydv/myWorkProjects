import React from "react";
import "./detail.css";
import img1 from "../../img/detail/detail_back_img.png";

const Detail = () => {
  return (
    <>
      <div
        className="img1"
        style={{
          backgroundImage: "url(" + img1 + ")",
          backgroundRepeat: "no-repeat",
          marginTop: "40px",
        }}
      >
        <section className="callto">
          <div className="row">
            <div className="col-lg-6 p-0"></div>
            <div className="col-lg-6 p-0">
              <div className="callto__form set-bg">
                <h3>Get a quote</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Number phone" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-6">
                      <select>
                        <option value="">Choose services</option>
                        <option value="">Beauty</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Your message"></textarea>
                      <button type="button" className="site-btn">
                        Book services
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Detail;
