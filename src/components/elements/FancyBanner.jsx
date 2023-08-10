import React from "react";
import { Link } from "react-router-dom";

const FancyBanner = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="title-style-five white-vr">
          <h2 className="title">Need Further Information !</h2>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-5 col-md-6 ms-auto">
        <p className="sm-pt-20">
          We have a team of experts and domain knowledge professionals, who can
          help you in your projects.
        </p>
        <Link to="/contact-us" className="theme-btn-one ripple-btn">
          Contact Now{" "}
          <img
            src={require("../../assets/images/icon/icon_42.svg").default}
            alt="icon"
          />
        </Link>
      </div>
    </>
  );
};

export default FancyBanner;
