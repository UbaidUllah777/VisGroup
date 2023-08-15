import React from "react";

import { Link, useParams } from "react-router-dom";

import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import Seo from "../components/common/seo/Seo";
import FancyBanner from "../components/banners/FancyBanner";
import NotFound from "./NotFound";

import classes from "../components/services/ServiceDetail.module.css";

// Data
import { serviceContent } from "../components/services/Services";

const ServiceDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  let service = null;

  for (const group of serviceContent) {
    service = group.areaServices.find((item) => item.id === id);
    if (service) {
      var ServiceGroupTitle = group.areaTitle;
      break;
    }
  }

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="main-page-wrapper">
      <Seo title="Service Detail" />

      <Sidebar />

      <Header />

      {/* Banner:start */}
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10">
              <h2 className="page-title font-recoleta">{service.title}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Banner:ENd */}

      {/* Our Services: Start */}
      <div className="vcamp-feature-section-one  mt-75">
        <div className="bg-wrapper " style={{ paddingTop: "50px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-7 col-lg-7" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="upper-title">{ServiceGroupTitle}</div>
                  <h4 className="title">{service.title}</h4>
                </div>
                <p className={`meta-info-text ${classes.serviceDetailPara}`}>
                  {service.text}
                </p>
                <Link to="/services" className="theme-btn-four ripple-btn">
                  View All Services{" "}
                </Link>
              </div>
              {/* End .col */}

              <div className="col-lg-4 " data-aos="fade-left">
                <div className=" mt-40 lg-mt-10">
                  <div className="row">
                    <div className="col-xxl-12 m-auto">
                      <div className="row">
                        <div>
                          <h4 className={`  mb-10 ${classes.customHeadingBar}`}>
                            Android Apps
                          </h4>
                          <p
                            className={`pb-3 mb-4 ${classes.serviceDetailTagPara}`}
                          >
                            We develop robust, scalable, and dynamic Android
                            Apps using different tools and frameworks, which not
                            only fulfill your business requirement; but strictly
                            adhere to Google guidelines and regulations.
                          </p>
                        </div>
                        <div>
                          <h4 className={`  mb-10 ${classes.customHeadingBar}`}>
                            Android Apps
                          </h4>
                          <p
                            className={`pb-3 mb-4 ${classes.serviceDetailTagPara}`}
                          >
                            We develop robust, scalable, and dynamic Android
                            Apps using different tools and frameworks, which not
                            only fulfill your business requirement; but strictly
                            adhere to Google guidelines and regulations.
                          </p>
                        </div>
                        <div>
                          <h4 className={`  mb-10 ${classes.customHeadingBar}`}>
                            Android Apps
                          </h4>
                          <p
                            className={`pb-3 mb-4 ${classes.serviceDetailTagPara}`}
                          >
                            We develop robust, scalable, and dynamic Android
                            Apps using different tools and frameworks, which not
                            only fulfill your business requirement; but strictly
                            adhere to Google guidelines and regulations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.box-layout --> */}
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* Our Services: END */}

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

export default ServiceDetail;
