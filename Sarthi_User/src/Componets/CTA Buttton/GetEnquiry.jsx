import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./CTA.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";
import Enquiry from "../../images/Enquiry.svg";

function GetEnquiry() {
  const [show, setShow] = useState(false);
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const form = useRef();

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
    if (Email.length <= 4) {
      setErrorsEmail_s("Enter Email");
      setErrorsEml(true);
    } else {
      setErrorsEml(false);
    }
  };

  const [startDate, setStartDate] = useState("");
  return (
    <div>
      {/* <div variant="primary"  className="">
        <img src={Enquiry} alt="" />
      </div> */}
      <div className="enquiry" onClick={handleShow}>
        Get Free Enquiry
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Get Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="col-lg-12 ">
            {/* about-text-grid */}
            <div className=" col-lg-12  d-flex flex-row row gy-5 justify-content-center">
              <form
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
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
                        id="contact-form"
                        type="text"
                        // placeholder="xxxx xxxxx"
                        name="Phone"
                        maxLength="10"
                        value={Mobail}
                        onChange={onchngemobile}
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
                      {errorsEml && (
                        <small style={{ color: "red", fontSize: 15 }}>
                          {errorsEmail_s}
                        </small>
                      )}

                      {/* {errors.user_email && (
                        <span style={{ color: "red", fontSize: 15 }}>
                          Enter Email
                        </span>
                      )} */}
                    </div>
                  </div>
                </div>
                {/* <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 mt-md-0 mt-4">
                      <label>Date</label>
                      <DatePicker
                        className="form-control"
                        placeholderText="select date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        // maxDate={new Date()}
                        name="date"
                      />
                      {/* <input
                    className="form-control"
                    type="date"
                    placeholder="example@email.com"
                    name="date"
                    // required
                    min={disableDate()}
                    // max={disableDate}
                    value={date}
                    onChange={onchngeDate}
                  /> */}
                {/* {errorsDat && (
                    <small style={{ color: "red", fontSize: 15 }}>
                      {errorsDate_s}
                    </small>
                  )} 
                    </div>

                    <div className="col-md-6 mt-md-0 mt-4">
                      <label>Demon Strate</label>
                      <select name="user_center" className="form-control">
                        <option> Demon Strate</option>
                        <option>Cerbosys</option>
                        <option>Gita Bhavan</option>
                      </select>
                    </div>
                  </div>
                </div> */}

                <div className="form-group">
                  <div className="row">
                    <div className="col-md-12">
                      <label>Your message</label>
                      <textarea
                        // placeholder="Type your message here"
                        className="form-control"
                        name="message"
                        // required
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
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default GetEnquiry;
