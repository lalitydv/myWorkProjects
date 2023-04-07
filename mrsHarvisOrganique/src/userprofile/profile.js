import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./profile.css";

import profile from "../img/profile/profile.png";
import loc from "../img/profile/loc.svg";
import cart from "../img/profile/cart.svg";
import logout from "../img/profile/logout.svg";

import Layout from "../components/layout";

const Profile = () => {
  const history = useNavigate();
  return (
    <>
      <Layout>
        <div className="container bg-light pt-5 pb-5 profile_item">
          <div className="d-flex profile_item">
            <div className="profile_image">
              <img src={profile} alt="" />
            </div>
            <div className="profile_image_right">
              <div className="d-flex profile_item">
                <Link to="/address" className="Link">
                  <div className="card address_cart bg-white ">
                    <img src={loc} style={{ cursor: "pointer" }} />

                    <span>Add your Address</span>
                  </div>
                </Link>

                <Link to="/order" className="Link">
                  <div className="card order_cart bg-white">
                    <img src={cart} style={{ cursor: "pointer" }} />
                    <span>View your Last Order</span>
                  </div>
                </Link>
              </div>
              
              <div className="card logout_cart bg-white">
                <span>Logout</span>
                <img
                  style={{ cursor: "pointer" }}
                  src={logout}
                  onClick={() => {
                    localStorage.removeItem("token");
                    history("/");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
