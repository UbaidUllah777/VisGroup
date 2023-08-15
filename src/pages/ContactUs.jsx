import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import { Link } from "react-router-dom";
import Address from "../components/elements/Address";
import Seo from "../components/common/seo/Seo";
import FromStyleThree from "../components/elements/ContactForm";
import VisLocations from "../components/VisLocations/VisLocation";

const ContactUs = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Contact Us" />

      <Sidebar />

      <Header />

      {/* Banner:start */}
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h2 className="page-title font-recoleta">
                Get In <span>touch</span> with us
              </h2>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <p>
                At Vis Group, we specialize in planning, developing, optimizing,
                and scaling network services and digital solutions to drive the
                seamless progress and growth of your business. Our dedicated
                team of professionals is committed to ensuring the highest
                quality and reliability of your solutions. Connect with us today
                to experience the professional expertise that guarantees the
                success and resilience of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Banner:ENd */}

      {/* Contact Information Section:Start */}
      <div className="contact-section-five">
        <div className="container">
          <div className="row">
            <Address />
          </div>
        </div>
        {/* End .container */}

        <div className="contact-meta mt-130 lg-mt-60">
          <div className="row gx-0">
            <div className="col-xl-6 order-xl-last d-flex">
              <div className="form-wrapper dark-bg w-100">
                <div className="form-style-three">
                  <h3 className="form-title font-recoleta pb-30 lg-pb-20">
                    Send Message.
                  </h3>
                  <FromStyleThree className="theme-btn-four " />
                </div>
                {/* <!-- /.form-style-three --> */}
              </div>
              {/* <!-- /.form-wrapper --> */}
            </div>
            {/* End .col */}

            <div className="col-xl-6 order-xl-first">
              <div
                className="map-area-two h-100 w-100"
                style={{
                  backgroundColor: "lightgray",
                  paddingTop: "50px",
                  paddingBottom: "50px",
                }}
              >
                <center>
                  {" "}
                  <VisLocations />
                </center>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* <!-- /.contact-meta --> */}
      </div>
      {/* Contact Information Section:End */}

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

export default ContactUs;
