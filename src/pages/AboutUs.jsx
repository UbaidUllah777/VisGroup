import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import TextBlockOne from "../components/elements/TextBlockOne";
import CounterUp from "../components/elements/CounterUp";
import Partners from "../components/elements/Partners";
import { Link } from "react-router-dom";
import FancyBanner from "../components/elements/FancyBanner";
import Seo from "../components/common/seo/Seo";
import banner from "../assets/images/banners/aboutUsBanner.jpg";
import AccordionOne from "../components/elements/AccordionOne";
import FooterMenuList from "../components/common/footer/FooterMenuList";

const AboutUs = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Abut Us" />

      <Sidebar />

      <Header />

      {/* Banner:start */}
      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">We Are Vis Group</h2>
          <p>Welcome to the Age of Digital Transformation</p>
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
                  <div className="upper-title">About Us</div>
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

            <div className="col-xl-5 col-lg-6 ms-auto">
              <div
                className="accordion accordion-style-one md-mt-30"
                id="accordionOne"
              >
                <AccordionOne />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* About Us : ENd */}

      {/* Who we are : start */}
      <div className="vcamp-text-block-one mt-70 lg-mt-40 position-static">
        <div className="container">
          <TextBlockOne />
        </div>
        {/* End TextBlockOne */}
      </div>
      {/* Who we are : End */}

      {/* Counter: start */}
      <div className="counter-section-three border-bottom pt-30 pb-50 lg-pt-20 lg-pb-10">
        <div className="container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* Counter: End */}

      {/* Our Partners: start */}
      <div className="partner-section-three mt-50 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4 col-md-8">
              <div className="title-style-one">
                <h2 className="title">
                  Our best <span>partners</span> for the long run.
                </h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 col-lg-7 ms-auto">
              <div className="row">
                <Partners />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* Our Partners: End */}

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
    // End .main-page-wrapper
  );
};

export default AboutUs;
