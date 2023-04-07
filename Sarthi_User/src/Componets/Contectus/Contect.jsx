import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetEnquiry from "../CTA Buttton/GetEnquiry";
import Bg_Image from "../../images/pexels-andrea-piacquadio-789822.jpg";
import logo from "../../images/SaarthiLogo.png";
import Address from "./Address";

function Contect() {
  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [firstname, setFrstname] = useState("");
  const [errorsfirstname, setErrorsfirstname] = useState("");
  const [errorsfirst, setErrorsfirst] = useState(false);

  const [lastname, setLastname] = useState("");
  const [errorslastname, setErrorslastname] = useState("");
  const [errorslast, setErrorslast] = useState(false);

  const [Mobail, setMobail] = useState("");
  const [errorsmobilenumber, setErrorsmobilenumber] = useState("");
  const [errorsmobile, setErrorsmobile] = useState(false);

  const [Email, setEmail] = useState("");
  const [errorsEmail_s, setErrorsEmail_s] = useState("");
  const [errorsEml, setErrorsEml] = useState(false);

  const onchngeFirstname = (e) => {
    const firstname = e.target.value.replace(/[^a-z]/gi, "");
    setFrstname(firstname);
    if (firstname.length <= 3) {
      setErrorsfirstname("Enter first Name");
      setErrorsfirst(true);
    } else {
      setErrorsfirst(false);
    }
  };
  const onchngeLastname = (e) => {
    const lastname = e.target.value.replace(/[^a-z]/gi, "");
    setLastname(lastname);
    if (lastname.length <= 3) {
      setErrorslastname("Enter Last Name");
      setErrorslast(true);
    } else {
      setErrorslast(false);
    }
  };
  const onchngemobile = (e) => {
    const Mobail = e.target.value.replace(/([^0-9])+/i, "");
    setMobail(Mobail);
    if (Mobail.length <= 9) {
      setErrorsmobilenumber("Enter valid Number");
      setErrorsmobile(true);
    } else {
      setErrorsmobile(false);
    }
  };
  const onchngeEmail = (e) => {
    const Email = e.target.value;
    setEmail(Email);
    if (Email) {
      setErrorsEmail_s("Enter Email");
      setErrorsEml(true);
    } else {
      setErrorsEml(false);
    }
  };
  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_w676m85",
        "template_5egz4eu",
        form.current,
        "8YAyIZQ0kYz8BKlXc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thankyou we will get back to you", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          toast.error("Samthing Wroung", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };
  return (
    <div>
      {/* className=" bg-contect" */}
      <div className="conteat-Image">
        <img src={Bg_Image} alt="" className="contectusebgimage" />
        <div className="text-center pt-3">
          {/* <span className="sub-title">add your caption here</span> */}
          <h2 className="w3pvt-title">Contact us</h2>
        </div>
      </div>
      <div className="contact-wthree  ">
        <div className="container  "></div>
        <section class="wthree-row pb-md-5 ">
          <div class="container pb-lg-5 pb-4">
            <div class="row abbot-main flex-row-reverse register-top1">
              <div class="offset-lg-1 col-lg-3 abbot-right mt-lg-0 mt-3">
                <div className="col d-flex justify-content-center about-text-grid2  ">
                  <div className=" mt-4    fw-bold row py-2 ">
                    <div className="col-12">
                      <h4 className="w3pvt-title ">
                        <img src={logo} alt="" className="logosss-contect" />
                      </h4>
                    </div>
                    <br />
                    {/* <div className="d-flex row justify-content-left mt-2 py-2">
                      <div className="col-2 email-left">Email- </div>
                      <div className="col-1">saarthiindore@gmail.com</div>
                    </div>
                    <div className="d-flex row justify-content-left mt-2 py-2">
                      <div className="col-3 email-left">Number- </div>
                      <div className="col-1">9575288778</div>
                    </div> */}
                    <div className="d-flex row justify-content-left   mt-2 py-2">
                      <div className="col-2 email-left ">
                        <i className="fa fa-envelope zoom"></i>
                      </div>
                      <div className="col-1 mt-2 ">saarthiindore@gmail.com</div>
                    </div>
                    <div className="d-flex row justify-content-left mt-2 py-2">
                      <div className="col-2 email-left ">
                        <i className="fa fa-phone coll_contect zoom"></i>
                      </div>
                      <div className="col-1 mt-2">9575288778</div>
                    </div>
                    <br />
                    <br />
                    <div className="wthree-social email-left  text-left py-3">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/SaarthiMP09"
                            target="_blank"
                          >
                            <span className="fa fa-facebook-f icon_facebook zoom"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/indoresaarthi/"
                            target="_blank"
                          >
                            <span className="fa fa-instagram icon_instagram zoom"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/saarthi-indore"
                            target="_blank"
                          >
                            <span className="fa fa-linkedin icon_linkedin zoom"></span>
                          </a>
                        </li>
                        {/* <li>
                          <a href="">
                            <span className="fa fa-twitter icon_twitter zoom"></span>
                          </a>
                        </li> */}
                        {/* <li>
                          <a href="https://test1.cerbosys.com/" target="_blank">
                            <span className="fa fa-dribbble icon_dribbble zoom"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fa fa-google-plus icon_g_plus zoom"></span>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 about-text-grid2">
                <div className=" col-lg-12  d-flex flex-row row gy-5 justify-content-center">
                  <div className="text-center">
                    <h6 className="sub-title " style={{ color: "#184683" }}>
                      send us a note
                    </h6>
                  </div>

                  <form
                    ref={form}
                    onSubmit={handleSubmit(sendEmail)}
                    // onSubmit={sendEmail}
                    className="register-wthree col"
                    autoComplete="off"
                  >
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>First name</label>
                          <input
                            className="form-control"
                            type="text"
                            // placeholder="yash"
                            name="user_Firstname"
                            value={firstname}
                            onChange={onchngeFirstname}
                          />
                          {errorsfirst && (
                            <small style={{ color: "red", fontSize: 15 }}>
                              {errorsfirstname}
                            </small>
                          )}
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                          <label>Last name</label>
                          <input
                            className="form-control"
                            type="text"
                            // placeholder="panday"
                            name="user_Lastname"
                            value={lastname}
                            onChange={onchngeLastname}
                          />
                          {errorslast && (
                            <small style={{ color: "red", fontSize: 15 }}>
                              {errorslastname}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>Mobile</label>
                          <input
                            className="form-control"
                            type="text"
                            // placeholder="xxxx xxxxx"
                            name="Phone"
                            value={Mobail}
                            onChange={onchngemobile}
                            maxLength="10"
                          />
                          {errorsmobile && (
                            <small style={{ color: "red", fontSize: 15 }}>
                              {errorsmobilenumber}
                            </small>
                          )}
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                          <label>Email</label>
                          <input
                            className="form-control"
                            type="email"
                            // placeholder="example@email.com"
                            name="user_email"
                            // required
                            {...register("user_email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                            value={Email}
                            onChange={onchngeEmail}
                          />
                          {/* {errorsEml && (
                            <small style={{ color: "red", fontSize: 15 }}>
                              {errorsEmail_s}
                            </small>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <label>Your message</label>
                          <textarea
                            // placeholder="Type your message here"
                            className="form-control"
                            name="message"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-w3layouts btn-block  bg-theme text-white w-100 font-weight-bold text-uppercase"
                          disabled={
                            firstname === "" ||
                            lastname === "" ||
                            Mobail === "" ||
                            Email === ""
                              ? true
                              : false
                          }
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Address />
        <div class="container">
          <div class="row">
            {/* Geeta Bhawan Square, Indore */}
            <div class="col-sm">
              <iframe
                className=" d-flex justify-content-center p-2"
                style={{ width: "100%", height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.297028773493!2d75.87648262561423!3d22.71719868575956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3c60a84c43%3A0xf7a6087ad9441ff3!2sD-7%2C%20Ratlam%20Kothi%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1663930371068!5m2!1sen!2sin"
                allowfullscreen
              ></iframe>
            </div>
            {/* Indore, Madhya Pradesh */}
            <div class="col-sm">
              <iframe
                className=" d-flex justify-content-center p-2"
                style={{ width: "100%", height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1321851935154!2d75.91508371495266!3d22.723327733147784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630396f8f29591%3A0x89941c1df2cc0c2e!2sCerbosys%20Technologies%20%7C%20Mobile%20%26%20Web%20Development%20%2C%20Digital%20Marketing%20%26%20Staff%20Augmentation%20Company!5e0!3m2!1sen!2sin!4v1663930253344!5m2!1sen!2sin"
                allowfullscreen
              ></iframe>
            </div>
            {/* Vadodara, Gujarat */}
            <div class="col-sm">
              <iframe
                className=" d-flex justify-content-center p-2"
                style={{ width: "100%", height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5824083428233!2d73.13173361494717!3d22.331627547400334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9eb1d20b307%3A0xfc6bb3bd59df7e48!2sKASPER%20SQUARE!5e0!3m2!1sen!2sin!4v1663929704469!5m2!1sen!2sin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- */}

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Contect;
