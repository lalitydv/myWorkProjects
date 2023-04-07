import React, { useState, useEffect } from "react";
import "./address.css";
import { Row, Form, Col, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/layout";
import loc from "../../img/profile/loc.svg";
import { IoCloseSharp } from "react-icons/io5";

const Address = () => {
  const history = useNavigate();
  const [update, setUpdate] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [Shoping, setShoping] = useState("");
  console.log(Shoping);
  const [AddAdress, setAddAdress] = useState("");
  const userToken = localStorage.getItem("token");
  // console.log(userToken);

  useEffect(async () => {
    await axios
      .get(
        "https://cerbosys.in:2000/mrsharvis/getAllAddress",

        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status == 200) {
          // const i = res?.data?.data.length - 1;
          // console.log("address--get--", res?.data?.data[i]);
          console.log("address--get--real", res);
          localStorage.getItem(userToken);
          localStorage.setItem("user_email", res.mobilenumber);
          setAddAdress(res.data.data);
          // setUpdate(true);
          // setFirstname(res?.data?.data[i].first_name);
          // setLastname(res?.data?.data[i].last_name);
          // setAddress1(res?.data?.data[i].address_line1);
          // setAddress2(res?.data?.data[i].address_line2);
          // setMobile(res?.data?.data[i].mobilenumber);
          // setCity(res?.data?.data[i].city);
          // setEmail(res?.data?.data[i].email);
          // setZip(res?.data?.data[i].postalcode);
        }
      });
  }, []);
  // Insert ADD Address start
  const Add = () => {
    document.getElementById("AddAddress").style.display = "Block";
  };

  const addAddress = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://cerbosys.in:2000/mrsharvis/insertShippingAddress",
        {
          first_name: firstname,
          last_name: lastname,
          address_line1: address1,
          address_line2: address2,
          city: city,
          postalcode: zip,
          mobilenumber: mobile,
          email: email,
        },

        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        }
      )
      .then((res) => {
        console.log("indsert/address--", res);
        document.getElementById("AddAddress").style.display = "none";

        localStorage.getItem(userToken);

        history("/address");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Insert ADD Address End

  var formData = new FormData();
  formData.append("user_id", userToken?.userId);
  formData.append("first_name", firstname);
  formData.append("last_name", lastname);
  formData.append("address_line1", address1);
  formData.append("address_line2", address2);
  formData.append("city", city);
  formData.append("email", email);
  formData.append("postalcode", zip);
  formData.append("mobilenumber", mobile);
  // Adress Get bye id start

  const hanldeClick = (shipping_id) => {
    document.getElementById("UpdateAddress").style.display = "Block";

    axios
      .get(
        `https://cerbosys.in:2000/mrsharvis/getShippingAddressById?shipping_id=${shipping_id}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        }
      )
      .then((res) => {
        console.log(shipping_id);
        if (res.data.data) {
          console.log(shipping_id);
          const i = res?.data?.data.length - 1;
          console.log("address--getById--", res.data.data);
          console.log(res.data.data);
          setShoping(res?.data?.data[i].shipping_id);
          setFirstname(res?.data?.data[i].first_name);
          setLastname(res?.data?.data[i].last_name);
          setAddress1(res?.data?.data[i].address_line1);
          setAddress2(res?.data?.data[i].address_line2);
          setMobile(res?.data?.data[i].mobilenumber);
          setCity(res?.data?.data[i].city);
          setEmail(res?.data?.data[i].email);
          setZip(res?.data?.data[i].postalcode);
        }
      });
  };
  // Addres get bye id end

  // update Address start
  const addUpdateAddress = async (e) => {
    e.preventDefault();
    axios
      .post(
        "https://cerbosys.in:2000/mrsharvis/updateShippingAddress",
        {
          shipping_id: Shoping,
          // first_name: firstname,
          // last_name: lastname,
          address_line1: address1,
          address_line2: address2,
          city: city,
          postalcode: zip,
          mobilenumber: mobile,
          email: email,
        },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + userToken,
          },
        }
      )
      .then((res) => {
        console.log("update/address--", res);
        // if (res.data.status === 200) {
        document.getElementById("UpdateAddress").style.display = "none";

        localStorage.getItem(userToken);

        history("/address");
      })
      .catch((err) => {});
  };
  // update ADD Address End

  // close popup model
  const modal = () => {
    document.getElementById("AddAddress").style.display = "none";
    document.getElementById("UpdateAddress").style.display = "none";
  };
  return (
    <>
      <Layout>
        <section className="order spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="order_head">
                  <img src={loc} style={{ cursor: "pointer" }} />
                  <h5>Add and Modify Your Address</h5>
                </div>

                <div className="order__table">
                  {AddAdress ? (
                    AddAdress.map((item, index) => (
                      <table className="order_table">
                        <thead>
                          <tr>
                            <th className="order__item">S.No</th>
                            <th className="order__item">FirstName</th>
                            <th className="order__item">LastName</th>
                            <th className="order__item">Mobile</th>
                            <th className="order__item">Email</th>
                            <th className="order__item">City</th>
                            <th className="order__item">Address_line1</th>
                            <th className="order__item">Address_line2</th>
                            <th className="order__item">Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="order__item">
                              <span>{index + 1}</span>
                            </td>

                            <td className="order__item">
                              <h6>{item.first_name}</h6>
                            </td>
                            <td className="order__item">
                              <span>{item.last_name}</span>
                            </td>
                            <td className="order__item">
                              <span>{item.mobilenumber}</span>
                            </td>
                            <td className="order__item">
                              <span>{item.email}</span>
                            </td>
                            <td className="order__item">
                              <span>{item.city}</span>
                            </td>
                            <td className="order__item">
                              <span>{item.address_line1}</span>
                            </td>
                            <td className="order__item">
                              <span>{item.address_line2}</span>
                            </td>
                            <td
                              className="order__item "
                              // onClick={(shipping_id) =>
                              //   addUpdateAddress(shipping_id)
                              // }
                              onClick={() => hanldeClick(item.shipping_id)}
                              id={item.shipping_id}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                                className="icone"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))
                  ) : (
                    <>
                      <h3 className="Addadress" onClick={() => Add()}>
                        + Add Address
                      </h3>
                      <p>No Address</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Addadress start popup  */}

        <div id="AddAddress" style={{ display: "none" }}>
          <div className=" AddressPopup">
            <div className=" conteners ">
              <div className=" header">
                <div className="addadressName">Add New Address</div>
                <div className="" onClick={modal}>
                  <Link to="/address">
                    <IoCloseSharp className="IoCloseSharp" />
                  </Link>
                </div>
              </div>
              <div className="flexcontener">
                <div className=" maincontent">
                  {/*   */}
                  <Form onSubmit={(e) => addAddress(e)}>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      ></Form.Group>
                    </Row>

                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          First Name
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          required
                          type="text"
                          placeholder={firstname}
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          required
                          type="text"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom08"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">Mobile</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid mobile.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">Email</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom04"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          Address Line1
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={address1}
                          onChange={(e) => setAddress1(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a address.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom05"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          Address Line2
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">City</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom07"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">Zip</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid zip.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="submit_data">
                      <button className="button add_button" type="submit">
                        Submit
                      </button>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Addadress End popup  */}

        {/* Update Address Start popup */}

        <div id="UpdateAddress" style={{ display: "none" }}>
          <div className=" AddressPopup">
            <div className=" conteners ">
              <div className=" header">
                <div className="addadressName">Add New Address</div>
                <div className="" onClick={modal}>
                  <Link to="/address">
                    <IoCloseSharp className="IoCloseSharp" />
                  </Link>
                </div>
              </div>
              <div className="flexcontener">
                <div className=" maincontent">
                  {/*   */}
                  <Form
                    onSubmit={(e) => addUpdateAddress(e)}
                    autoComplete="off"
                  >
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      ></Form.Group>
                    </Row>

                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          First Name
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          required
                          type="text"
                          placeholder={firstname}
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          required
                          type="text"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom08"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">Mobile</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid mobile.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">Email</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom04"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          Address Line1
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={address1}
                          onChange={(e) => setAddress1(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a address.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom05"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">
                          Address Line2
                        </Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-12" style={{ justifyContent: "center" }}>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom03"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">City</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom07"
                        className="form_row"
                      >
                        <Form.Label className="form_lable">Zip</Form.Label>
                        <Form.Control
                          className="form_input"
                          type="text"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid zip.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="submit_data">
                      <button
                        className="button add_button"
                        // type="submit"
                        // onClick={() => {
                        //   addUpdateAddress();
                        // }}
                      >
                        Update
                      </button>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Update Address End popup  */}
      </Layout>
    </>
  );
};

export default Address;
