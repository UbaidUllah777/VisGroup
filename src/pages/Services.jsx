import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import { AllServices } from "../components/services/Services";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";
import banner from "../assets/images/banners/ServicesBanner.jpg";

import FancyBanner from "../components/banners/FancyBanner";

const Services = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Services" />

      <Sidebar />

      <Header />

      {/* Banner: Start */}
      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Our Services</h2>
          <p style={{ fontWeight: "bold" }}>
            We’re empowering Services to do great things together
          </p>
        </div>
      </div>
      {/* Banner: End */}

      {/* All Services:Start */}
      <div className="vcamp-feature-section-seven style-two mt-10 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-xl-9 col-lg-7 col-md-9 m-auto"
              data-aos="fade-up"
            >
              <div className="title-style-one text-center">
                <h4 className="title">
                  Explore Our Top Notch Solutions and Services
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="box-layout mt-40 lg-mt-10">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <AllServices />
              </div>
            </div>
          </div>
          {/* <!-- /.box-layout --> */}
        </div>
      </div>
      {/* All Services:Start */}

      {/* Call to action: start */}
      <div className="fancy-banner-one mt-20 lg-mt-120">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
          </div>
        </div>
      </div>
      {/* Call to action: End */}

      {/* Footer : start */}
      <footer className="vcamp-footer-two pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40 d-flex align-items-center justify-content-center">
              <div className="logo">
                <Link to="/">
                  <img
                    src={require("../assets/images/logo/visLogo.png")}
                    alt="Vis Logo"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                </Link>
                <p style={{ fontFamily: "Recoleta" }}>
                  We offer digital services in network benchmarking, software
                  development, and mobile network testing. Contact us for
                  details.
                </p>
              </div>
            </div>
            {/* End .col */}
            <FooterMenuList />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-footer">
            <CopyrightFooter />
          </div>
        </div>
        {/* End .container */}
      </footer>
      {/* Footer : End */}
    </div>
    // End .main-page-wrapper
  );
};

export default Services;
