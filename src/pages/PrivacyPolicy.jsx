import React from "react";
import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";
import FooterMenuList from "../components/common/footer/FooterMenuList";

const PrivacyPolicy = () => {
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
              className="col-lg-5 col-md-6 "
              style={{ marginBottom: "0.9rem" }}
            >
              <h2 className="page-title font-recoleta">
                <span>Privacy Policy</span>
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
                  Introduction
                </span>{" "}
              </h4>
              <p style={{ fontSize: "14px" }}>
                At Vis Group, we are committed to protecting the privacy and
                security of your personal information. This Privacy Policy
                outlines how we collect, use, disclose, and protect the
                information you provide to us through our website. By accessing
                or using our website, you consent to the terms and practices
                described in this Privacy Policy.
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
                  Information we Collect:
                </span>
              </h4>
              <p style={{ fontSize: "14px" }}>
                a. Personal Information: We may collect personal information,
                such as your name, email address, phone number, and company name
                when you voluntarily provide it to us through forms or other
                means on our website.<br></br>
                b. Non-Personal Information: We may collect non-personal
                information, such as your IP address, browser type, operating
                system, and referring website URLs. This information is
                collected automatically through cookies and similar
                technologies.
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
                  Use of Information:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                a. Personal Information: We may use your personal information to
                respond to your inquiries, provide requested services or
                information, process transactions, send administrative
                communications, and improve our website and services.<br></br>{" "}
                b. Non-Personal Information: We may use non-personal information
                to analyze trends, track usage patterns, gather demographic
                information, and improve the functionality and performance of
                our website.
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
                  Information Sharing:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                a. Third-Party Service Providers: We may share your personal
                information with trusted third-party service providers who
                assist us in operating our website, conducting business
                activities, and delivering services to you. These third-party
                service providers are required to maintain the confidentiality
                and security of your personal information.<br></br> b. Legal
                Requirements: We may disclose your personal information if
                required to do so by law or in response to a valid request by a
                governmental or regulatory authority.<br></br> c. Business
                Transfers: In the event of a merger, acquisition, or sale of all
                or a portion of our assets, your personal information may be
                transferred or disclosed as part of the transaction. We will
                take reasonable steps to ensure the confidentiality of your
                personal information in such circumstances.
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
                  Data Security:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                We implement appropriate technical and organizational measures
                to protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. However, no method of
                transmission over the internet or electronic storage is
                completely secure, and we cannot guarantee the absolute security
                of your information.
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
                  Cookies and Tracking Technologies:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                We use cookies and similar tracking technologies to enhance your
                experience on our website, analyze usage patterns, and deliver
                personalized content. You can modify your browser settings to
                decline cookies or be notified when cookies are being sent.
                However, please note that some features of our website may not
                function properly if you disable cookies.
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
                  Links to Third-Party Websites:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                Our website may contain links to third-party websites or
                services that are not controlled or operated by us. This Privacy
                Policy does not apply to those third-party websites. We
                encourage you to review the privacy policies of those websites
                before providing any personal information.
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
                  Children's Privacy:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                Our website is not intended for individuals under the age of 10.
                We do not knowingly collect personal information from children.
                If you believe we have inadvertently collected personal
                information from a child, please contact us, and we will take
                prompt steps to delete that information from our records.
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
                  Changes to this Privacy Policy:
                </span>
              </h4>

              <p style={{ fontSize: "14px" }}>
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                the revised Privacy Policy on our website. We encourage you to
                review this Privacy Policy periodically for any updates.
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

export default PrivacyPolicy;
