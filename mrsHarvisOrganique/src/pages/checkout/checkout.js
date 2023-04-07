import React, { useState, useEffect } from 'react';
import './checkout.css';
import Layout from '../../components/layout';
import axios from 'axios';
import { SERVER } from '../../url';
import logo from '../../img/logotest.png';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

// var __DEV__ = document.domain === "localhost";
// const address = localStorage.getItem("address");
// const addresses = JSON.parse(address);

const Checkout = (qty) => {
  const { toPrice } = useParams();
  console.log('from cart', toPrice);

  const [update, setUpdate] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [mobile, setMobile] = useState('');
  // console.log("contact",mobile)
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');

  const [shippingid, setShippingId] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [loading, setLoading] = useState(false);

  const cartitem = useSelector((state) => state.cartReducer.carts);
  console.log('cartitem', cartitem);
  const to_pri = useSelector((state) => state.cartReducer.totlprice);
  console.log('total price', to_pri);

  const userToken = localStorage.getItem('token');
  // console.log(userToken);
  const userEmail = localStorage.getItem('user_email');
  // console.log("user email", use_email);

  // const { num } = useParams();
  // console.log("num", num);

  //get all address of user
  useEffect(async () => {
    //get address in input field last address of user
    var formData = new FormData();
    formData.append('user_id', userToken?.userId);
    formData.append('first_name', firstname);
    formData.append('last_name', lastname);
    formData.append('address_line1', address1);
    formData.append('address_line2', address2);
    formData.append('city', city);
    formData.append('email', email);
    formData.append('postalcode', zip);
    formData.append('mobilenumber', mobile);
    formData.append('shipping_id', shippingid);

    await axios
      .get(
        'https://cerbosys.in:2000/mrsharvis/getAllAddress',

        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status == 200) {
          const i = res?.data?.data.length - 1;
          console.log('address--get--', res?.data?.data[i]);
          // console.log("address--get--real", res);

          setUpdate(true);
          setFirstname(res?.data?.data[i].first_name);
          setLastname(res?.data?.data[i].last_name);
          setAddress1(res?.data?.data[i].address_line1);
          setAddress2(res?.data?.data[i].address_line2);
          setMobile(res?.data?.data[i].mobilenumber);
          setCity(res?.data?.data[i].city);
          setEmail(res?.data?.data[i].email);
          setZip(res?.data?.data[i].postalcode);
          setShippingId(res?.data?.data[i].shipping_id);
        }
      });
  }, []);

  let productsToDispatch = [];

  for (var i = 0; i < cartitem.length; i++) {
    productsToDispatch.push({
      id: cartitem[i].product_id,
      amount: cartitem[i].product_price,
      offerId: '1',
      // offerId: cartitem[i].offer_id,
      productQty: '1',
      // productQty: cartitem[i].product_quantity,
      tax_lines: [
        {
          title: 'IGST',
          rate: 0.05,
        },
      ],
    });
  }

  // console.log("buy product", productsToDispatch);

  let totalPrice = 0;
  for (let i = 0; i < cartitem.length; i++) {
    totalPrice += cartitem[i].product_price;
  }

  let totalDiscount = 0;
  for (let i = 0; i < cartitem.length; i++) {
    totalDiscount += cartitem[i].product_discount;
  }

  let productsToBuy = [];
  for (var i = 0; i < cartitem.length; i++) {
    productsToBuy.push({
      product_id: cartitem[i].product_id,
      product_quantity: '1',
      // product_quantity: cartitem[i].product_quantity,
      product_price: cartitem[i].product_price,
      offer_id: cartitem[i].offer_id,
    });
  }
  console.log('product-buy ', productsToBuy);

  //add and update address
  const addUpdateAddress = (e, payment_mode) => {
    e.preventDefault();
    axios
      .post(
        ` ${
          update
            ? SERVER + '/insertShippingAddress'
            : SERVER + '/updateShippingAddress'
        } `,
        {
          first_name: firstname,
          last_name: lastname,
          address_line1: address1,
          address_line2: address2,
          city: city,
          postalcode: zip,
          mobilenumber: mobile,
          email: email,
          payment_mode: payment_mode,
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + userToken,
          },
        }
      )
      .then((res) => {
        console.log('update/indsert/address--', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const razorpayPament = () => {
    let razorpayPamentData = {
      totalAmount: toPrice,
      discount: totalDiscount,
      payableAmount: toPrice,
      shipping_id: shippingid,
      status: 'Pending',
      payment_type: 'Online',
      order_date: moment(moment.now()).format('YYYY-MM-DD'),
      products: productsToBuy,
    };
    console.log('razorpayPamentData', razorpayPamentData);
    axios
      .post(
        'https://cerbosys.in:2000/mrsharvis/proceedToCheckout',

        {
          totalAmount: toPrice,
          discount: totalDiscount,
          payableAmount: toPrice,
          shipping_id: shippingid,
          status: 'Pending',
          payment_type: 'Online',
          order_date: moment(moment.now()).format('YYYY-MM-DD'),
          products: productsToBuy,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        console.log('generating order id in online payment', res.data);
        setLoading(false);
        if (res.data.status == 200) {
          const totalAmount = toPrice - totalDiscount;
          function loadScript(src) {
            return new Promise((resolve) => {
              const script = document.createElement('script');
              script.src = src;
              script.onload = () => {
                resolve(true);
              };
              script.onerror = () => {
                resolve(false);
              };
              document.body.appendChild(script);
            });
          }
          var __DEV__ = document.domain === 'localhost';
          async function displayRazorpay() {
            const res = loadScript(
              'https://checkout.razorpay.com/v1/checkout.js'
            );

            if (!res) {
              setLoading(false);
              alert('Razorpay failed');
              return;
            }

            const options = {
              key: __DEV__ ? 'rzp_test_PdqMllZchkVonI' : 'API Key',
              amount: totalAmount * 100,
              currency: 'INR',
              name: 'MRS Harvis',
              description: 'Test Transaction',
              image: { logo },
              order_id: res?.data?.order_id,
              payment_mode: 'online',
              handler: function (response) {
                console.log('razor pay response', response);
                console.log(
                  'razorpay payment id',
                  response.razorpay_payment_id
                );
                console.log('razorpay order id', response.razorpay_order_id);
                console.log('razorpay sinature', response.razorpay_signature);
              },
              prefill: {
                email: userEmail,
                contact: mobile,
                // name: "xyz",
                // email: "123@xyz.com",
              },
            };
            // const paymentObject = new window.Razorpay(options);
            // paymentObject.open();
            const rzp = new window.Razorpay(options);
            rzp.open();
          }
          displayRazorpay();
        } else {
          console.log('something went wrong');
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const cashPayment = () => {
    const cashPaymentData = {
      totalAmount: toPrice,
      discount: totalDiscount,
      payableAmount: toPrice,
      shipping_id: 1,
      status: 'Pending',
      payment_type: 'cash',
      order_date: moment(moment.now()).format('YYYY-MM-DD'),
      products: productsToBuy,
    };
    console.log('cashPaymentData', cashPaymentData);
    axios
      .post(
        'https://cerbosys.in:2000/mrsharvis/proceedToCheckout',
        {
          totalAmount: toPrice,
          discount: totalDiscount,
          payableAmount: toPrice,
          shipping_id: 1,
          status: 'Pending',
          payment_type: 'cash',
          order_date: moment(moment.now()).format('YYYY-MM-DD'),
          products: productsToBuy,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        console.log('generating order id cash payment', res.data);
      });
  };

  return (
    <>
      <Layout>
        <section className="checkout spad">
          <div className="container">
            <div className="checkout__form">
              <form
              // onSubmit={(e) => {
              //   addUpdateAddress(e);
              // }}
              >
                <div className="row">
                  <div className="col-lg-8">
                    <div className="checkout__form__top">
                      <div className="row">
                        {/* <div className="col-lg-6 col-md-6">
                          <h5>Contact information</h5>
                        </div> */}
                        {/* <div className="col-lg-6 col-md-6">
                          <h6>
                            Already have an account? <a href="#">Login</a>
                          </h6>
                        </div> */}
                      </div>
                    </div>
                    <div className="checkout__address">
                      <h5>Shipping address</h5>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input__item">
                            <p>
                              First Fame<span>*</span>
                            </p>
                            <input
                              className="firstname"
                              prefill="pooja"
                              required
                              type="text"
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input__item">
                            <p>
                              Last name<span>*</span>
                            </p>
                            <input
                              type="text"
                              required
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input__item">
                            <p>
                              Email<span>*</span>
                            </p>
                            <input
                              required
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="input__item">
                            <p>
                              Mobile<span>*</span>
                            </p>
                            <input
                              type="text"
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                              required
                            />
                          </div>
                          <div className="input__item double__input">
                            <p>
                              Address Line1<span>*</span>
                            </p>
                            <input
                              type="text"
                              placeholder="Street address"
                              value={address1}
                              onChange={(e) => setAddress1(e.target.value)}
                              required
                            />
                          </div>
                          <div className="input__item double__input">
                            <p>
                              Address Line2<span>*</span>
                            </p>
                            <input
                              type="text"
                              required
                              placeholder="Steet address"
                              value={address2}
                              onChange={(e) => setAddress2(e.target.value)}
                            />
                          </div>
                          <div className="input__item">
                            <p>
                              City<span>*</span>
                            </p>
                            <input
                              type="text"
                              onChange={(e) => setCity(e.target.value)}
                              value={city}
                              required
                            />
                          </div>
                          <div className="input__item">
                            <p>
                              Zip<span>*</span>
                            </p>
                            <input
                              type="text"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                              required
                            />
                          </div>
                          {/* <label for="sv">
                            Save this infomation for next time
                            <input type="checkbox" id="sv" />
                            <span className="checkmark" type="submit"></span>
                          </label> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="checkout__proceed">
                      <div className="checkout__proceed__title">
                        <h5>Your order</h5>
                      </div>
                      {/* <div className="checkout__proceed__coupon">
                        <p>
                          Enter coupon code. It will be applied at checkout.
                        </p>
                        <div className="coupon__input">
                          <input type="text" placeholder="Your code here" />
                          <button type="submit">APPLY</button>
                        </div>
                      </div> */}
                      <div className="checkout__proceed__product">
                        <h5>Products</h5>
                        <ul>
                          {/* <li>
                            1x Succulent gym <span>$21.0</span>
                          </li>
                          <li>
                            1x The affogato <span>$32.0</span>
                          </li>
                          <li>
                            1x The dublin <span>$26.0</span>
                          </li>
                          <li>
                            1x The green thumb <span>$12.0</span>
                          </li> */}
                        </ul>
                      </div>
                      <ul className="checkout__proceed__total">
                        <li>
                          Subtotal <span>{toPrice}</span>
                          {/* Subtotal <span>{totalPrice}</span> */}
                        </li>
                        <li>
                          Discount <span>{totalDiscount}</span>
                        </li>
                        <li>
                          Total <span>{toPrice - totalDiscount}</span>
                        </li>
                      </ul>
                      <div className="checkout__proceed__widget">
                        <div
                          onChange={(e) => setPaymentMode(e.target.value)}
                          value={paymentMode}
                        >
                          <input
                            type="radio"
                            id="cod"
                            name="payment"
                            value="cash"
                          />
                          &nbsp;&nbsp; Cash On Delivery
                          <br />
                          <input
                            type="radio"
                            id="razorpay"
                            name="payment"
                            value="online"
                          />
                          &nbsp;&nbsp;Online Payment
                        </div>
                      </div>
                      {true && (
                        <button
                          type="button"
                          className="proceed__btn"
                          onClick={(e) => {
                            if (paymentMode == 'online') {
                              razorpayPament();
                            } else if (paymentMode == 'cash') {
                              cashPayment();
                            } else {
                              alert('plz select payment mode');
                            }

                            if (firstname === null) {
                              setFirstname({
                                firstnameError: true,
                              });
                            }
                            // addUpdateAddress(e);
                          }}
                        >
                          {loading ? 'Processing...' : 'Proceed to Pay'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Checkout;
