import React from "react";

import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";

import { Link } from "react-router-dom";
import FancyBanner from "../components/elements/FancyBanner";
import Seo from "../components/common/seo/Seo";
import Faq2 from "../components/elements/Projects/Faq2";
import FooterMenuList from "../components/common/footer/FooterMenuList";

const Projects = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Our Projects" />

      <Sidebar />

      <Header />

      {/* Banner:start */}
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <h2 className="page-title font-recoleta">
                Find <span>Answers</span> here.
              </h2>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for layouts and visual.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Banner : End */}

      {/* About Us: start */}
      <div className="vcamp-text-block-one mt-50 lg-mt-120">
        <div className="container">
          <div className="row align-items-center" style={{ marginTop: "20px" }}>
            <div className="col-xxl-6 col-xl-7 col-lg-5">
              <div className="text-wrapper" style={{ paddingTop: "10px" }}>
                <div className="title-style-one">
                  <div className="upper-title">About Our Projects </div>
                  <p
                    style={{
                      fontFamily: "Recoleta",
                      fontSize: "16px",
                      textAlign: "justify",
                    }}
                  >
                    We’ve been helping customer globally.Elevate your digital
                    products and solutions with Vis Group, a leading provider of
                    end-to-end testing and quality assurance services. Operating
                    across Germany, Europe, and Asia, we offer comprehensive
                    testing solutions that ensure the flawless performance of
                    your digital offerings. From telecommunication system
                    testing to network benchmarking, infotainment systems
                    testing, and software testing, our expert team leverages
                    their domain knowledge to deliver superior results. With Vis
                    Group, you can trust in our meticulous testing processes and
                    experienced professionals to provide your end-users with a
                    seamless and exceptional experience. Let us validate and
                    optimize your digital solutions for unparalleled success.
                  </p>
                </div>
              </div>
            </div>
            {/* End .col */}

            {/* End .col */}
          </div>
        </div>
      </div>
      {/* About Us : ENd */}

      <div className="faq-section-two lighGray-bg mb-70">
        <div className="container">
          <div className="row">
            <Faq2 />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>

      {/* Call to action: start */}
      <div className="fancy-banner-one mt-200 lg-mt-120">
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
  );
};

export default Projects;
