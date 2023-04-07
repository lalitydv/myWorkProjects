import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../../url";
import { IMAGE_URL } from "../../url";

const ProductDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SERVER}/getProductsByProductId?product_id=${id}`)
      .then((res) => setData(res.data.data), console.log(data));
  }, []);

  return (
    <>
      <Layout>
        <div className="container mt-4">
          {data.map((item) => (
            <div className="row mt-4">
              <div className="col-md-5">
                <img
                  className="product_image"
                  src={IMAGE_URL + `${item.product_image.substr(8)}`}
                  alt="img"
                />
              </div>
              <div className="col-md-5">
                <h2>Name : {item.product_name}</h2>
                <p>Product Description : {item.product_description}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
