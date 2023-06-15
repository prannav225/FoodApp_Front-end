import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="card text-center h-75 m-auto ">
        <img
          src="\images\Babai Hotel LOGO.png"
          alt=""
          width={"250px"}
          className="logoimg mx-auto mt-5"
        />
        <h1 className="heading fs-1">Error</h1>
        <h4 className="privacy fs-3">Page Not Found</h4>
        <div>
          <Link className="btn btn-warning" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
