import React from "react";
import "./wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import { ADD } from "../../redux/actions/cartAction";

const Wishlist = () => {

  const wishlistData = useSelector((state) => state.wishlistReducer.wishlist);
  console.log("wishlist details");
  console.log(wishlistData);

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  return (
    <>
      <Layout>
        <section className="wishlist spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="wishlist__table">
                  <table>
                    {/* <thead>
                      <tr>
                        <th>Product</th>
                        <th>Unit price</th>
                        <th>Stock</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead> */}
                    <tbody>
                    {wishlistData.map((item) => {
                      return(
                      <tr>
                        <td className="wishlist__item">
                          <div className="wishlist__item__pic">
                            <img
                              src={`https://cerbosys.in:2000${item.product_image.substr(
                                8
                              )}`}
                              width= "100px"
                              alt=""
                              // data-pagespeed-url-hash="1745899609"
                              // onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                            />
                          </div>
                          <div className="wishlist__item__text">
                            <h6>{item.product_name}</h6>
                          </div>
                        </td>
                        <td className="wishlist__price">₹{item.product_price}</td>
                        <td className="wishlist__stock">In stock</td>
                        <td className="wishlist__btn">
                          <a href="#" onClick={() => send(item)}>Add To Cart</a>
                        </td>
                        <td className="wishlist__close">
                          <i className="fa fa-close"></i>
                        </td>
                      </tr>
                        );
                       })} 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Wishlist;
