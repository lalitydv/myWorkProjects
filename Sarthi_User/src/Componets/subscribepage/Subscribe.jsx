import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CTA Buttton/CTA.css";

function Subscribe() {
  const [Email, setEmail] = useState("");
  const [errorsEmail_s, setErrorsEmail_s] = useState("");
  const [errorsEml, setErrorsEml] = useState(false);

  const onchngeEmail = (e) => {
    const Email = e.target.value;
    setEmail(Email);
    if (Email.length <= 2) {
      setErrorsEmail_s("Enter Email");
      setErrorsEml(true);
    } else {
      setErrorsEml(false);
    }
  };

  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w676m85",
        "template_wwb8elg",
        form.current,
        "8YAyIZQ0kYz8BKlXc"
      )
      .then(
        (result) => {
          // alert(result);
          toast.success("Thankyou we will get back to you", {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
        (error) => {
          // alert(error);
          toast.error("Samthing Wroung", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <div>
      {" "}
      {/* ----subscribe--- */}
      <div className="abt_bottom py-lg-5 bg-theme">
        <div className="container py-sm-4 py-3">
          <h4 className="abt-text text-capitalize text-center mb-0">
            The Exclusive Best Kangen Machine Provider
          </h4>
          <p className="text-center">Sign Up to Our Newsletter.</p>
          <div className="subscribe-grid">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form
                  ref={form} // onSubmit={handleSubmit(sendEmail)}
                  onSubmit={sendEmail}
                  autoComplete="off"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    {...register("user_email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    value={Email}
                    onChange={onchngeEmail}
                  />
                  {errorsEml && (
                    <small
                      className="font_error"
                      style={{ color: "red ", fontSize: 20 }}
                    >
                      {errorsEmail_s}
                    </small>
                  )}
                  <button
                    className="btn1"
                    type="submit"
                    disabled={Email === "" ? true : false}
                  >
                    Get Notified
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----subscribe--- */}
      <ToastContainer />
    </div>
  );
}

export default Subscribe;
