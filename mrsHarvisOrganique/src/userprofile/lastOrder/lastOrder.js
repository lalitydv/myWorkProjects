import React, { useEffect, useState } from "react";
import axios from "axios";
import "./lastOrder.css";
import Layout from "../../components/layout";
import cart from "../../img/profile/cart.svg";

const LastOrder = () => {
  //Create a Base url variable
  const baseUrl = "https://cerbosys.in:2000/mrsharvis";

  //Calling a api for all products
  const [data, setData] = useState([]);
  console.log(data);

  let userToken = localStorage.getItem("token");
  console.log("user data", userToken);

  useEffect(async () => {
    await axios
      .get(`${baseUrl}/getAllOrderDetail`, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <Layout>
      <div>
        <section className="order spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="order_head">
                  <img src={cart} style={{ cursor: "pointer" }} />
                  <h5>View Your Order</h5>
                </div>
                <div className="order__table">
                  <table className="order_table">
                    <thead>
                      <tr>
                        <th className="order__item" style={{ width: 100 }}>
                          S.No
                        </th>
                        <th className="order__item">image</th>
                        <th className="order__item">Name</th>
                        <th className="order__item">Price</th>
                        <th className="order__item" style={{ width: 100 }}>
                          qty
                        </th>
                        <th className="order__item">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data ? (
                        data.map((item, index) => (
                          // return (
                          <tr>
                            <td className="order__item">
                              <span>{index + 1}</span>
                            </td>

                            <td className="order__item">
                              <div className="order__item__pic">
                                <img
                                  src={`https://cerbosys.in:2000${item.product_image.substr(
                                    8
                                  )}`}
                                  width="100px"
                                  alt=""
                                  // data-pagespeed-url-hash="4182688258"
                                  // onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                />
                              </div>
                              {/* <div className="cart__item__text"></div> */}
                            </td>
                            <td className="order__item">
                              <h6>{item.product_name}</h6>
                            </td>
                            <td className="order__item">
                              <span>₹{item.product_price}</span>
                            </td>
                            <td className="order__item">
                              <span>{item.product_quantity}</span>
                            </td>
                            <td className="order__item">
                              <span>
                                {item.product_price * item.product_quantity}
                              </span>
                            </td>
                          </tr>
                          // );
                        ))
                      ) : (
                        <p>No order</p>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default LastOrder;
