import React from 'react';
import { useParams } from 'react-router-dom';

function Shiping() {
  const { toPrice } = useParams();
  console.log(toPrice);
  return <div>shiping</div>;
}

export default Shiping;
