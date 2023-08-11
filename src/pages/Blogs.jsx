import React from "react";

import Sidebar from "../components/common/header/sidebar/Sidebar";
import Header from "../components/common/header/Header";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import { Link } from "react-router-dom";
import AllBlogs from "../components/blogs/Blog";
import Seo from "../components/common/seo/Seo";
import banner from "../assets/images/banners/aboutUsBanner.jpg";

const Blogs = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Blogs" />

      <Sidebar />

      <Header />

      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Our Blogs</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
      </div>

      <div className="blog-section-one mt-180 mb-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <div className="col-xl-5 col-md-6 col-sm-7">
                  <div className="title-style-five">
                    <div className="upper-title">News & Blogs</div>
                    <h2 className="title">Our Blogs</h2>
                  </div>
                </div>
                {/* End .col */}

                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="mt-100 lg-mt-60">
                <div className="row">
                  <AllBlogs />
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
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

export default Blogs;
