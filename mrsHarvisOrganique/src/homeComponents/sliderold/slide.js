import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import {SERVER} from "../../url";
import axios from "axios";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Slide = ()=> {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(SERVER + '/getProducts')
      .then((res) => setData(res.data.data), console.log("product",data));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
      {data.map((item) => (
        <Carousel breakPoints={breakPoints}>
    
          <Item>{item.product_name}</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
          <Item>Eight</Item>

        </Carousel>
                ))}
      </div>
    </>
  );
}
export default Slide;