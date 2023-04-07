import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./login.css";
import logo from "../img/HarvisImg/logo.png";
import Google from "../img/HarvisImg/google.png";
import backImage from "../img/HarvisImg/head3.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  //Create a Base url variable
  const baseUrl = "https://cerbosys.in:2000/mrsharvis";

  // const onLoginFailure = (res) => {
  //   console.log("Login Failed:", res);
  // };

  const handleLogin = () => {
    history("/");
  };

  const history = useNavigate();

  const loginSuccess = (res) => {
    var user_name = res.profileObj.name;
    var user_email = res.profileObj.email;

    console.log("Name", user_name);
    console.log("Email", user_email);

    const loginData = {
      user_name: user_name,
      user_email: user_email,
    };

    console.log("LoginData", loginData);
    // localStorage.setItem("login", loginData.user_email);

    let url = `${baseUrl}/userLogin`;
    let data = {
      user_name: user_name,
      user_email: user_email,
    };
    localStorage.setItem("user", data.user_email);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
        localStorage.setItem("token", resp.token);
        localStorage.setItem("user", resp.user);
        localStorage.setItem("user_email", loginData.user_email);
      });
    });
    history("/");
  };

  const loginFailed = (res) => {
    console.log(res);

    toast(`Kindly enable  cookies in your browser `, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div
        className="bg_image"
        style={{
          backgroundImage: "url(" + backImage + ")",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container login">
          <div className="card">
            <div className="card_logo">
              <img src={logo} className="card_logo_image" />
            </div>

            <h2 className="title">Mrs Harvi's</h2>
            <p className="cart_content">
              continue for full access to our website
            </p>
            <div>
              <GoogleLogin
                className="google_login"
                clientId="969961569336-nm4dbdccboed4018d72s6dmmg26uq19g.apps.googleusercontent.com"
                buttonText="Sign In With Google"
                onSuccess={loginSuccess}
                onFailure={loginFailed}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                onClick={handleLogin}
              />
            </div>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
