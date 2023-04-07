import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="text-center mt-5  notfound">
      <h2 className="w3pvt-title">Sorry !!! 404 Not Found</h2> <br />
      <button className="btn2">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default Notfound;
