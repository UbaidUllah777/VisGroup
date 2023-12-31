import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";
import FooterMenuList from "../components/common/footer/FooterMenuList";

const Imprint = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Imprint" />
      <Sidebar />
      <Header />

      {/* Banner:start */}
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 "
              style={{ marginBottom: "0.9rem" }}
            >
              <h2 className="page-title font-recoleta">
                <span>Imprint</span>
              </h2>
            </div>
            <div className="col-lg-3 col-md-3 "></div>
            <div
              className="col-lg-3 col-md-4 "
              style={{ alignItems: "flex-end" }}
            >
              <img
                src={require("../assets/images/logo/visLogo.png")}
                alt="Vis Logo"
                style={{ maxWidth: "250px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Banner:ENd */}

      <div className=" mt-20 mb-100 lg-mt-10 lg-mb-80">
        <div className="container">
          <hr style={{ marginBottom: "2rem" }} />
          <div className="row">
            <div className="col-12">
              <center>
                {" "}
                <h3
                  style={{
                    fontFamily: "Recoleta",
                    fontWeight: "normal",
                    fontSize: "30px",
                    lineHeight: "1.16em",
                    marginBottom: "60px",
                  }}
                >
                  <span
                    style={{
                      color: "#e16817",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    Vis
                  </span>{" "}
                  Group
                </h3>
              </center>
              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Imprint Statement:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                Welcome to Vis Group, a leading provider of comprehensive IT
                consulting services based in Germany. With a strong presence
                across Europe, Asia, and the Middle East, we offer a wide range
                of cutting-edge solutions in telecommunications, network
                benchmark testing, field performance testing, software
                development, infotainment systems, SoS Calls testing, and many
                other IT consulting services. At Vis Group, we are dedicated to
                delivering innovative and tailored solutions to meet the unique
                needs of our clients. Our team of highly skilled professionals
                combines their expertise with state-of-the-art technologies to
                provide exceptional services that drive business growth and
                success.
              </p>
              {/* address  */}

              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Address:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                Address: Hansa Str. 03, 47058 Duisburg, Germany
              </p>
              {/* Telefon */}

              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Phone:
                </span>
              </h4>
              <p style={{ fontSize: "14px" }}>+49 (0) 203 346 893 40</p>
              {/* Fax */}

              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Fax:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>+49 (0) 203 346 893 42</p>

              {/* Email */}

              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Email:
                </span>
              </h4>
              <p style={{ fontSize: "14px" }}> info@vision-ps.de</p>

              {/* Board  */}
              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Board:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}> Dipl. Ing. Javid Iqbal</p>

              {/* Registration  */}
              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Registration court:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>District Court of Duisburg</p>
              {/* Registeration number */}

              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Registration number:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>HRB .26023</p>
              {/* sales tax identification number */}
              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Sales tax identification number according to § 27 a sales tax
                  law:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>DE274243305</p>

              {/* Disclamer  */}

              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Disclaimer:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                The contents of this website are created with utmost care.
                However, the provider assumes no liability for the correctness,
                completeness and topicality of the content provided. The use of
                the retrievable content is at the user's own risk.
              </p>
              {/* we offer you */}
              <h4
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  lineHeight: "1.16em",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  What we offer you:
                </span>
              </h4>
              <p style={{ fontSize: "14px" }}>
                Qualified employees with the current level of training and
                development. A management level that promotes individual and
                entrepreneurial spirit. <br /> We also strive to create a
                pleasant working atmosphere for all of our employees. If you
                would like to strengthen our team, please fill out the form
                below or contact us by email{" "}
                <a href="info@visgroup.eu">info@visgroup.eu</a>. <br /> As soon
                as we have a suitable position for you, we will notify you
                immediately. If you have any questions about our services and /
                or company, please contact us. <br /> Please note that all
                information provided on this website is subject to our terms and
                conditions. For further details regarding our services, please
                refer to our privacy policy and disclaimer. Thank you for
                choosing Vis Group. We look forward to partnering with you to
                achieve your business objectives and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default Imprint;
