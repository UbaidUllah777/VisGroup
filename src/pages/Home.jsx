import React from "react";
import { Link } from "react-router-dom";
import networkTowerImg from "../assets/images/home/networktower.jpg";
import homeBannerSmallimg from "../assets/images/home/home502x632.jpg";
import Sidebar from "../components/common/header/sidebar/Sidebar";

import CounterUp from "../components/elements/CounterUp";
import FeatureSectionFour from "../components/elements/FeatureSectionFour";
import Header from "../components/common/header/Header";

import { LatestThreeBlogs } from "../components/blogs/Blog";
import FooterMenuList from "../components/common/footer/FooterMenuList";
import CopyrightFooter from "../components/common/footer/CopyrightFooter";
import FancyBanner from "../components/banners/FancyBanner";
import Seo from "../components/common/seo/Seo";
import MainFourServices from "../components/services/Services";

const Home = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Home" />

      <Sidebar />

      <Header />
      {/* Banner: Start */}
      <div className="hero-banner-eight">
        <div className="scroll-bar"></div>
        {/* End .scroll-bar */}

        <div className="banner-content h-100 d-md-flex align-items-center justify-content-between">
          <div className="text-wrapper">
            <h1 className="hero-heading">Vis Group.</h1>
            <p className="hero-sub-heading text-normal">
              We are helping clients to create Durable and high quality
              Sloutions with our talented resources and experts.
            </p>
            <Link to="/contact-us" className="theme-btn-eleven ripple-btn">
              Consult with an expert now!
            </Link>
          </div>
          {/* <!-- /.text-wrapper --> */}

          <div className="img-wrapper position-relative">
            <img src={homeBannerSmallimg} alt="media" />
          </div>
          {/* End .img-wrapper */}
        </div>
        {/* <!-- /.banner-content --> */}
      </div>
      {/* Banner: End */}

      {/* Our Services: Start */}
      <div className="vcamp-feature-section-one  mt-75">
        <div className="bg-wrapper " style={{ paddingTop: "50px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-4 col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="upper-title">What we do</div>
                  <h4 className="title">
                    Our <span>Services</span> .
                  </h4>
                </div>
                <p className="meta-info-text ">
                  Vis Group offers Services in Telecommunication, Network
                  Benchmarking, infotainment systems testing, Quality Assurance
                  and Software Development to its global clients. Vis Group is
                  committed to helping our clients navigate complex and
                  technical aspects of technology to yield a number of benefits;
                  such as competitive advantage, efficiency, enhancement,
                  productivity, reliability, and security of their digital
                  solutions while keeping in mind the time and budget
                  constraints.
                </p>
                <Link to="/services" className="theme-btn-four ripple-btn">
                  View All Services{" "}
                </Link>
              </div>
              {/* End .col */}

              <div className="col-lg-8 " data-aos="fade-left">
                <div className=" mt-40 lg-mt-10">
                  <div className="row">
                    <div className="col-xxl-12 m-auto">
                      <div className="row">
                        <MainFourServices />
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

      {/* About Us: Start */}
      <div className="vcamp-text-block-eleven mt-140 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-style-one">
                <div className="upper-title">Why choose us</div>
                <h4 className="title">We Solve Your Problem.</h4>
              </div>
            </div>
            <div className="col-lg-5 ">
              <p className=" md-pt-30">
                Welcome to Vis Group, your trusted partner for cutting-edge
                solutions in network benchmarking, infotainment system testing,
                software development, and quality assurance. With our global
                presence spanning Germany, Europe, the Middle East, and the UK,
                we empower businesses worldwide with unparalleled expertise and
                innovation. Unleash your potential with Vis Group and unlock
                limitless possibilities in the digital realm.
              </p>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="main-content" style={{ marginTop: "50px" }}>
          <div className="container">
            <div className="row">
              <div
                className="col-xxl-5 col-lg-6 ms-auto order-lg-last"
                data-aos="fade-left"
              >
                <div className="text-wrapper">
                  {/* End Video trigger wrapper */}
                  <div className="title-style-one">
                    <h3 className="title">
                      We’ve been helping <span>customers</span> globally.
                    </h3>
                  </div>
                  <p className="mt-30">
                    Elevate your digital products and solutions with Vis Group,
                    a leading provider of end-to-end testing and quality
                    assurance services. Operating across Germany, Europe, and
                    Asia, we offer comprehensive testing solutions that ensure
                    the flawless performance of your digital offerings. From
                    telecommunication system testing to network benchmarking,
                    infotainment systems testing, and software testing, our
                    expert team leverages their domain knowledge to deliver
                    superior results. With Vis Group, you can trust in our
                    meticulous testing processes and experienced professionals
                    to provide your end-users with a seamless and exceptional
                    experience. Let us validate and optimize your digital
                    solutions for unparalleled success.
                  </p>
                  <Link to="/about-us" className="theme-btn-two">
                    More about us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="left-img-meta">
            <img src={networkTowerImg} alt="media" className="w-100" />
          </div>
          {/* <!-- /.left-img-meta --> */}
        </div>
        {/* <!-- /.main-content --> */}
      </div>
      <div className="counter-section-three border-bottom pt-30 pb-50 lg-pt-20 lg-pb-10">
        <div className="container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* About Us: END */}

      {/* Our Facts and Figers: Start */}
      <div className="vcamp-feature-section-four ">
        <FeatureSectionFour />
      </div>
      {/* Our Facts and Figers: END */}

      {/* Our Lastest Three Blogs:start */}
      <div className="blog-section-one">
        <div className="container">
          <div className="border-top pt-120 md-pt-100">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="title-style-five">
                      <div className="upper-title">Latest Blogs</div>
                      <h2 className="title">Our Blogs</h2>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-xl-7 col-sm-6 text-sm-end text-start">
                    <Link to="/blogs" className="theme-btn-three xs-mt-30">
                      View All Blogs <i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="mt-100 lg-mt-60">
                  <div className="row feature-post">
                    <LatestThreeBlogs />
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Lastest Three Blogs:start */}

      {/* Call to Action : start */}
      <div className="fancy-banner-one mt-200 lg-mt-120">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action : End */}

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

export default Home;
