import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";
import FooterMenuList from "../components/common/footer/FooterMenuList";

const TermsAndConditions = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Terms and conditions" />
      <Sidebar />
      <Header />

      {/* Banner:start */}
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 "
              style={{ marginBottom: "0.9rem" }}
            >
              <h2 className="page-title  font-recoleta">
                <span>Terms And Conditions</span>
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
                  Terms and Conditions:
                </span>{" "}
              </h4>
              <p style={{ fontSize: "14px" }}>
                These terms and conditions ("Terms") govern your use of the Vis
                Group website and the services provided by Vis Group ("we,"
                "us," or "our"). By accessing or using our website and services,
                you agree to be bound by these Terms. If you do not agree with
                any part of these Terms, please do not use our website or
                services.
              </p>

              {/* Haftungshinweis */}
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
                  1. Service Description:
                </span>
              </h4>
              <p style={{ fontSize: "14px" }}>
                Vis Group offers a range of telecommunications, network
                benchmark testing, field performance testing, software
                development, infotainment system, SoS Calls testing, and other
                IT consulting services. The specific details and terms of these
                services will be outlined in separate agreements or contracts
                between Vis Group and the client.
              </p>

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
                  2. User Obligations:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                a. You agree to use our website and services in compliance with
                applicable laws and regulations. <br /> b. You are responsible
                for providing accurate and complete information when using our
                website or engaging our services. <br /> c. You agree not to
                engage in any activity that may disrupt or interfere with the
                operation of our website or services, including but not limited
                to introducing viruses, malware, or any other harmful code.{" "}
                <br /> d. You acknowledge that the content on our website is
                protected by intellectual property rights, and you agree not to
                reproduce, modify, distribute, or exploit any content without
                our prior written consent.
              </p>

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
                  3. Privacy:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                We are committed to protecting your privacy. Our Privacy Policy
                explains how we collect, use, and disclose your personal
                information. By using our website and services, you consent to
                the collection, use, and disclosure of your personal information
                as described in our Privacy Policy.
              </p>

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
                  4. Intellectual Property:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                a. All intellectual property rights, including but not limited
                to copyrights, trademarks, and patents, associated with our
                website and services are owned by Vis Group or its licensors.{" "}
                <br /> b. You are granted a limited, non-exclusive, and
                non-transferable license to access and use our website and
                services for personal and non-commercial purposes. This license
                does not permit you to reproduce, modify, distribute, or create
                derivative works based on our website or services without our
                prior written consent.
              </p>

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
                  5. Limitation of Liability:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                a. We strive to provide accurate and reliable information on our
                website and in our services. However, we do not guarantee the
                accuracy, completeness, or reliability of any information or
                content. <br /> b. To the extent permitted by law, we shall not
                be liable for any direct, indirect, incidental, special, or
                consequential damages arising out of or in connection with your
                use of our website or services. <br /> c. We shall not be liable
                for any loss or damage resulting from any interruption,
                suspension, or termination of our website or services.
              </p>

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
                  6. Indemnification:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                You agree to indemnify, defend, and hold harmless Vis Group and
                its directors, officers, employees, and agents from and against
                any claims, liabilities, damages, losses, costs, or expenses
                arising out of or in connection with your use of our website or
                services, violation of these Terms, or infringement of any
                third-party rights.
              </p>

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
                  7. Governing Law and Jurisdiction:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                These Terms shall be governed by and construed in accordance
                with the laws of Germany. Any dispute arising out of or in
                connection with these Terms shall be subject to the exclusive
                jurisdiction of the courts located in Germany.
              </p>

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
                  8.Modifications to Terms:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                We reserve the right to modify or update these Terms at any time
                without prior notice. Any changes will be posted on our website,
                and the revised Terms will become effective when posted. Your
                continued use of our website or services after the posting of
                any changes constitutes your acceptance of such changes. If you
                have any questions or concerns about these Terms, please contact
                us at <a href="info@visgroup.eu">info@visgroup.eu</a>. These
                Terms and Conditions were last updated on 11 August 2023.
              </p>

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
                  Contact Us:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at{" "}
                <a href="info@visgroup.eu">info@visgroup.eu</a>.
              </p>

              <p style={{ fontSize: "14px" }}>
                By using our website, you acknowledge that you have read and
                understood this Privacy Policy and agree to our collection, use,
                and disclosure of your information as described herein.
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

export default TermsAndConditions;
