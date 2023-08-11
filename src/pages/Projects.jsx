import React from "react";

import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";

import { Link } from "react-router-dom";
import FancyBanner from "../components/elements/FancyBanner";
import Seo from "../components/common/seo/Seo";
import Faq2 from "../components/elements/Projects/Faq2";
import Certification from "../components/elements/Certification";
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
                Find Our <span>Projects</span> here.
              </h2>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <p>
                Explore our diverse project portfolio and witness our expertise
                across telecommunications, network benchmarking, field
                performance testing, and more. Find inspiration in our impactful
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Banner : End */}

      {/* About Us: start */}
      <div className="vcamp-text-block-one mt-20 lg-mt-120">
        <div className="container">
          <div className="row align-items-center" style={{ marginTop: "20px" }}>
            <div className="col-xxl-6 col-xl-7 col-lg-5">
              <div className="text-wrapper" style={{ paddingTop: "10px" }}>
                <div className="title-style-one">
                  <div className="upper-title">About Our Projects </div>
                  <p
                    style={{
                      // fontFamily: "Recoleta",
                      fontSize: "16px",
                      textAlign: "justify",
                    }}
                  >
                    Vis Group is dedicated to providing comprehensive
                    outsourcing options for a wide range of industries,
                    including telecommunications, network benchmarking, field
                    performance testing, infotainment system testing, GPS and
                    mobile application testing, manual and automation testing,
                    software development, and related services. Our highly
                    skilled technicians and engineers are available for
                    project-based deployments, eliminating the need for
                    permanent employees on your side. With our agile approach,
                    we can swiftly allocate resources to any location within
                    Europe and worldwide. Partner with Vis Group for efficient
                    and reliable outsourcing solutions tailored to meet your
                    specific needs.
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

      {/* Projects Table With Data: Start */}
      <div
        className="faq-section-two lighGray-bg mb-70"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
          <div className="row">
            <Faq2 />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* Projects Table With Data: End */}

      {/* We Are Certified: Start */}
      <div className="container">
        <div className="row align-items-center">
          <Certification />
        </div>
      </div>
      {/* We Are Certified: End */}

      {/* Call to action: start */}
      <div className="fancy-banner-one mt-100 lg-mt-120">
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
