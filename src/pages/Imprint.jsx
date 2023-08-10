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
              <h3
                style={{
                  fontFamily: "Recoleta",
                  fontWeight: "normal",
                  fontSize: "30px",
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
                  Vision
                </span>{" "}
                PS GmbH
              </h3>
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Anschrift:
                </span>{" "}
                Hansa Str. 03, 47058 Duisburg, Deutschland
              </p>

              {/* Telefon */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Telefon:
                </span>{" "}
                +49 (0) 203 346 893 40
              </p>

              {/* Fax */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Fax:
                </span>{" "}
                +49 (0) 203 346 893 42
              </p>

              {/* Email */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Email:
                </span>{" "}
                info@vision-ps.de
              </p>

              {/* Vorstand */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Vorstand:
                </span>{" "}
                Dipl. Ing. Javid Iqbal
              </p>

              {/* Registergericht */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Registergericht:
                </span>{" "}
                Amtsgericht Duisburg
              </p>

              {/* Registernummer */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Registernummer:
                </span>{" "}
                HRB .26023
              </p>

              {/* Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz */}
              <p style={{ fontSize: "14px" }}>
                <span
                  style={{
                    color: "#e16817",
                    position: "relative",
                    display: "inline-block",
                    fontFamily: "Recoleta",
                  }}
                >
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz:
                </span>{" "}
                DE274243305
              </p>

              {/* Haftungshinweis */}
              <p
                style={{
                  color: "#e16817",
                  position: "relative",
                  display: "inline-block",
                  fontFamily: "Recoleta",

                  marginBottom: "0.2rem",
                  fontSize: "20px",
                }}
              >
                Haftungshinweis
              </p>
              <p style={{ fontFamily: "Recoleta", fontSize: "14px" }}>
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
                erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die
                Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
                Inhalte. Die Nutzung der abrufbaren Inhalte erfolgt auf eigene
                Gefahr des Nutzers.
              </p>

              {/* Wir bieten Ihnen */}
              <p
                style={{
                  color: "#e16817",
                  position: "relative",
                  display: "inline-block",
                  fontFamily: "Recoleta",

                  marginBottom: "0.2rem",
                  fontSize: "20px",
                }}
              >
                Wir bieten Ihnen
              </p>
              <p style={{ fontFamily: "Recoleta", fontSize: "14px" }}>
                Qualifizierte Mitarbeiter mit aktuellem Ausbildungs- und
                Entwicklungsstand. Eine Führungsebene, die individuellen und
                unternehmerischen Geist fördert Ausserdem bemühen wir uns um ein
                angenehmes Arbeitsklima für alle unsere Mitarbeiter.
              </p>

              <p style={{ fontFamily: "Recoleta", fontSize: "14px" }}>
                Wenn Sie unser Team verstärken möchten, dann füllen Sie bitte
                das nachfolgende Formular aus oder kontaktieren sie uns
                persönlich.Sobald wir eine passende Stelle für Sie haben, werden
                wir Sie umgehend benachrichtigen.
              </p>

              <p style={{ fontFamily: "Recoleta", fontSize: "14px" }}>
                Wenn Sie Fragen zu unseren Leistungen und / oder Unternehmen
                haben, nehmen Sie mit uns Kontakt auf.
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
