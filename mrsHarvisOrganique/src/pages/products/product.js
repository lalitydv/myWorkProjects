import React, { useState, useEffect } from "react";
import "./product.css";
import Layout from "../../components/layout";

import { BsHandbagFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { SERVER } from "../../url";
import { IMAGE_URL } from "../../url";

import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/cartAction";
import { ADD_WISHLIST } from "../../redux/actions/wishlistAction";

const Product = () => {
  //Create a Base url variable
  //Calling a api for all products
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get(SERVER + "/getProducts").then((res) => {
      setData(res.data.data);
      console.log("product", res.data.data);
    });
  }, []);

  const dispatch = useDispatch();

  //create a add to cart function using redux
  const send = (product_id) => {
    console.log(product_id);
    dispatch(ADD(product_id));
  };

  //create a add to wishlist function using redux
  const wish = (e) => {
    console.log(e);
    dispatch(ADD_WISHLIST(e));
  };

  return (
    <>
      <Layout>
        <section className="products spad">
          <div className="container">
            <div className="row">
              {data.map((item) => (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div className="product__item__pic set-bg">
                      <img
                        className="product_image"
                        src={IMAGE_URL + `${item.product_image.substr(8)}`}
                      />
                      <div className="product__item__hover">
                        <ul>
                          <li>
                            <Link to="" style={{ cursor: "pointer" }}>
                              <BsHandbagFill onClick={() => send(item)} />
                            </Link>
                            <span>Add to Cart</span>
                          </li>
                          <li>
                            <Link to={`/product/${item.product_id}`}>
                              <FaRegEye />
                            </Link>
                            <span>Keep an eye</span>
                          </li>
                          <li>
                            <a href="">
                              <BsFillSuitHeartFill onClick={() => wish(item)} />
                            </a>
                            <span>Love this</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product__item__text">
                      <span>{item.product_name}</span>
                      <h6>
                        <a href="#">{item.product_description}</a>
                      </h6>
                      <div className="price">₹{item.product_price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Product;
