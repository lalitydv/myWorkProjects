import React, { useState, useEffect } from 'react';

import './product.css';
import img1 from '../../img/product/test1.png';
import img2 from '../../img/product/test2.png';
import img3 from '../../img/product/test3.png';
import img4 from '../../img/product/test4.png';

import { Link } from 'react-router-dom';

import { BsHandbagFill } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { SERVER } from '../../url';
import { IMAGE_URL } from '../../url';
import axios from 'axios';

const Product = () => {
  //Calling a api for all products
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(SERVER + '/getProducts')
      .then((res) => setData(res.data.data), console.log('product', data));
  }, []);
  return (
    <>
      <section className="beauty-products spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span>Beauty Products</span>
                <h2>Beauty products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div v className="product__item">
                <div className="product__item__pic set-bg">
                  <img src={img1} className="product_image" />
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="">
                          <BsHandbagFill />
                        </a>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <Link to={`/product`}>
                          <FaRegEye />
                        </Link>
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="">
                          <BsFillSuitHeartFill />
                        </a>
                        <span>Love this</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="product__item__text">
                    <span>Palettes</span>
                    <h6>
                      <a to="/">Leather shopper bag</a>
                    </h6>
                    <div className="price">$49.00</div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div v className="product__item">
                <div className="product__item__pic set-bg">
                  <img src={img2} className="product_image" />
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <BsHandbagFill />
                        </a>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <Link to={`/product`}>
                          <FaRegEye />
                        </Link>
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <BsFillSuitHeartFill />
                        </a>
                        <span>Love this</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="product__item__text">
                    <span>Palettes</span>
                    <h6>
                      <a to="/">Leather shopper bag</a>
                    </h6>
                    <div className="price">$49.00</div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div v className="product__item">
                <div className="product__item__pic set-bg">
                  <img src={img3} className="product_image" />
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <BsHandbagFill />
                        </a>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <Link to={`/product`}>
                          <FaRegEye />
                        </Link>
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <BsFillSuitHeartFill />
                        </a>
                        <span>Love this</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="product__item__text">
                    <span>Palettes</span>
                    <h6>
                      <a to="/">Leather shopper bag</a>
                    </h6>
                    <div className="price">$49.00</div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div v className="product__item">
                <div className="product__item__pic set-bg">
                  <img src={img4} className="product_image" />
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <BsHandbagFill />
                        </a>
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <Link to={`/product`}>
                          <FaRegEye />
                        </Link>
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <BsFillSuitHeartFill />
                        </a>
                        <span>Love this</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="product__item__text">
                    <span>Palettes</span>
                    <h6>
                      <a to="/">Leather shopper bag</a>
                    </h6>
                    <div className="price">$49.00</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="more__btn">
                <Link to="/product">VIEW ALL PRODUCTS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
