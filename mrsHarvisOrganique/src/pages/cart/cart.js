import './cart.css';
import Layout from '../../components/layout';

import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

import { DLT, TTL } from '../../redux/actions/cartAction';
import { useState } from 'react';
import Checkout from '../checkout/checkout';

const Cart = () => {
  const cartData = useSelector((state) => state.cartReducer.carts);
  console.log('cart details', cartData);
  const dispatch = useDispatch();
  //delete product in cart function using redux
  const dlt = (product_id) => {
    dispatch(DLT(product_id));
    console.log('item delete', product_id);
  };
  var totalPrice = 0;
  var cartproduct_id;
  var offerId;
  var productQty = 0;
  if (cartData) {
    for (let i = 0; i < cartData.length; i++) {
      cartproduct_id = cartData[i].product_id;
      totalPrice += cartData[i].product_price;
      // offerId = cartData[i].offer_id;
      productQty = cartData[i].product_quantity;
      // console.log(productQty);
    }
  }
  // logic for increment and decrement
  const [num, setNum] = useState(cartData.map((item) => 1));
  console.log(num[0]);
  const [disable, setDisable] = useState(cartData.map((item) => false));

  const increment = (index) => {
    num[index]++;
    setNum([...num]);
    disable[index] = false;
    setDisable([...disable]);
  };
  const decrement = (index) => {
    if (num[index] > 1) {
      disable[index] = false;
      setDisable([...disable]);
      num[index]--;
      setNum([...num]);
    } else {
      num[index] = 1;
      setNum([...num]);
      disable[index] = true;
      setDisable([...disable]);
    }
  };
  const history = useNavigate();

  const routeChange = () => {
    console.log(totalCartPrice);
    totl(totalCartPrice);
    history(
      `/checkout/please fill all required fields /${totalCartPrice}/and checkout to payment section`
    );
    return <Checkout qty={totalCartPrice} />;
  };

  const totl = (totalCartPrice) => {
    dispatch(TTL(totalCartPrice));
    console.log('item price', totalCartPrice);
  };
  var totalCartPrice = 0;

  return (
    <>
      <Layout>
        <>
          <section className="cart spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="cart__table">
                    <table>
                      <tbody>
                        {cartData.map((item, i) => {
                          totalCartPrice += item.product_price * num[i];
                          console.log('totalCartPrice', totalCartPrice);
                          return (
                            <tr>
                              <td className="cart__item">
                                <div className="cart__item__pic">
                                  <img
                                    src={`https://cerbosys.in:2000${item.product_image.substr(
                                      8
                                    )}`}
                                    width="100px"
                                    alt=""
                                  />
                                </div>
                                <div className="cart__item__text">
                                  <h6>{item.product_name}</h6>
                                  {/* <span>₹{item.product_price}</span> */}
                                </div>
                              </td>
                              <td className="cart__quantity">
                                <div className="quantity">
                                  <div className="pro-qty">
                                    {/* Decrement Button */}
                                    <button
                                      style={{
                                        border: 'none',
                                        backgroundColor: 'white',
                                      }}
                                      type="button"
                                      className="input-group-text"
                                      disabled={disable[i]}
                                      onClick={() => decrement(i)}
                                    >
                                      -
                                    </button>
                                    {/* Decrement Button Ends */}

                                    {/* Setting Qty of the Product  */}
                                    <div
                                      className="form-control text-center"
                                      style={{
                                        border: 'none',
                                        marginTop: '4px',
                                      }}
                                    >
                                      {num[i]}
                                    </div>

                                    {/* <input 
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} /> */}

                                    {/* Setting Qty of the Product  Ends*/}
                                    {/* Increment Button  */}
                                    <button
                                      style={{
                                        border: 'none',
                                        backgroundColor: 'white',
                                      }}
                                      type="button"
                                      className="input-group-text"
                                      onClick={() => increment(i)}
                                    >
                                      +
                                    </button>
                                    {/* Increment Button Ends */}
                                  </div>
                                </div>
                              </td>

                              <td className="cart__price">
                                {item.product_price * num[i]}
                                {/* {(p[i] = item.product_price * num[i])}
                                {console.log("p", p[i])} */}
                              </td>
                              <td className="cart__close">
                                <button
                                  style={{
                                    border: 'none',
                                    backgroundColor: 'white',
                                  }}
                                  onClick={() => dlt(item.product_id)}
                                >
                                  <GrFormClose />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="cart__btn">
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="cart__btn__continue">
                          <a href="#">Continue shopping</a>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-7">
                        <div className="cart__btn__right">
                          <a href="#">Clear shopping cart</a>
                          <a href="#">Update cart</a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="col-lg-4">
                  {/* <div className="cart__coupon">
                    <p>Enter coupon code. It will be applied at checkout.</p>
                    <form action="#">
                      <input type="text" placeholder="Your code here" />
                      <button type="submit">APPLY</button>
                    </form>
                  </div> */}
                  <div className="cart__total">
                    <h5>Cart Total</h5>
                    <ul>
                      <li>
                        Subtotal <span>₹{totalCartPrice}</span>
                        {/* <Checkout  data={num.totalPrice*num} />    */}
                      </li>
                      <li>
                        Total <span>₹{totalCartPrice}</span>
                      </li>
                    </ul>
                    <button
                      to="./checkout"
                      className="cart__total"
                      onClick={routeChange}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    </>
  );
};

export default Cart;
