import React from "react";
// import Sidebar from "../components/common/header/sidebar/Sidebar";
// import Header from "../components/consulting-agency/Header";
// import CopyrightFooter from "../components/common/footer/CopyrightFooter";
// import TextBlockOne from "./inner-pages/pages/essentials/components/TextBlockOne";
// import CounterUp from "../components/business/CounterUp";
// import FeatureSlider from "../components/consulting-agency/FeatureSlider";
// import Partners from "../components/elements/Partners";
// import { Link } from "react-router-dom";
// import FancyBanner from "../components/banners/FancyBanner";
// import Address from "../components/elements/Address";
// import Seo from "../components/common/seo/Seo";
// import banner from "../assets/images/banners/aboutUsBanner.jpg";
// import AccordionOne from "../components/elements/AccordionOne";
// import FooterMenuList from "../components/common/footer/FooterMenuList";

const Projects = () => {
  // return (
  //   <div className="main-page-wrapper">
  //     <Seo title="Projects" />
  //     <Sidebar />
  //     <Header />
  //     <div
  //       className="inside-hero-two"
  //       style={{
  //         backgroundImage: `url(${banner})`,
  //       }}
  //     >
  //       <div className="container">
  //         <h2 className="page-title">Our Projects</h2>
  //         <p>We’re empowering WordPress to do great things together</p>
  //       </div>
  //     </div>
  //     {/* <!-- /.inside-hero-one --> */}
  //     <div className="vcamp-text-block-one mt-200 lg-mt-120 position-static">
  //       <div className="container">
  //         <TextBlockOne />
  //       </div>
  //       {/* End TextBlockOne */}
  //       <div className="position-relative">
  //         <img
  //           src={require("../assets/images/shape/shape_05.svg").default}
  //           alt="shape"
  //           className="shapes shape-two"
  //         />
  //       </div>
  //     </div>
  //     <div className="vcamp-text-block-five mt-170 lg-mt-120">
  //       <div className="container">
  //         <div className="row align-items-center">
  //           <div className="col-xxl-6 col-xl-7 col-lg-5">
  //             <div className="text-wrapper">
  //               <div className="title-style-five">
  //                 <div className="upper-title">ABOUT US</div>
  //                 <h2 className="title">
  //                   We’ve been helping cutomer globally.
  //                 </h2>
  //               </div>
  //             </div>
  //           </div>
  //           {/* End .col */}
  //           <div className="col-xl-5 col-lg-6 ms-auto">
  //             <div
  //               className="accordion accordion-style-one md-mt-30"
  //               id="accordionOne"
  //             >
  //               <AccordionOne />
  //             </div>
  //           </div>
  //           {/* End .col */}
  //         </div>
  //       </div>
  //     </div>
  //     {/* <!-- /.vcamp-text-block-one --> */}
  //     {/* <!--
  // 		=====================================================
  // 			Counter Section One
  // 		=====================================================
  // 		--> */}
  //     <div className="counter-section-one mt-170 md-mt-120">
  //       <div className="inner-container">
  //         <div className="row">
  //           <CounterUp />
  //         </div>
  //       </div>
  //     </div>
  //     {/* End .counter-section-one */}
  //     {/* <!--
  // 		=============================================
  // 			Vcamp Feature Section Five
  // 		==============================================
  // 		--> */}
  //     <div className="vcamp-feature-section-five mt-100 lg-mt-80">
  //       {/* End .container */}
  //       <div className="arrow-none">
  //         <FeatureSlider />
  //       </div>
  //       {/* End .feature_slider_one */}
  //     </div>
  //     {/* <!-- /.vcamp-feature-section-five --> */}
  //     {/* <!--
  // 		=====================================================
  // 			Partner Section Three
  // 		=====================================================
  // 		--> */}
  //     <div className="partner-section-three mt-200 lg-mt-120">
  //       <div className="container">
  //         <div className="row align-items-center">
  //           <div className="col-xl-5 col-lg-4 col-md-8">
  //             <div className="title-style-one">
  //               <h2 className="title">
  //                 Our best <span>partners</span> for the long run.
  //               </h2>
  //             </div>
  //           </div>
  //           {/* End .col */}
  //           <div className="col-xl-6 col-lg-7 ms-auto">
  //             <p className="info-text">
  //               Over <span>32K+</span> software businesses growing with vCamp.
  //             </p>
  //             <div className="row">
  //               <Partners />
  //             </div>
  //           </div>
  //           {/* End .col */}
  //         </div>
  //       </div>
  //     </div>
  //     {/* <!-- /.partner-section-three --> */}
  //     {/* <!--
  // 		=====================================================
  // 			Feedback Slider Two
  // 		=====================================================
  // 		--> */}
  //     <div className="feedback-section-two box-layout mt-110 lg-mt-50">
  //       <div className="bg-wrapper">
  //         <div className="container">
  //           <div className="row align-items-center justify-content-center">
  //             <div className="col-xl-7 col-lg-6 col-md-8 m-auto">
  //               <div className="title-style-one text-center ">
  //                 <h2 className="title">
  //                   What’s our <span>client</span> say about us.
  //                 </h2>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         {/* <!-- /.container --> */}
  //       </div>
  //       {/* <!-- /.bg-wrapper --> */}
  //     </div>
  //     {/* <!-- /.feedback-section-two --> */}
  //     {/* <!--
  // 		=====================================================
  // 			Vcamp Fancy Banner Three
  // 		=====================================================
  // 		--> */}
  //     <div className="box-layout mt-200 lg-mt-120">
  //       <div className="fancy-banner-three">
  //         <div className="inner-content position-relative">
  //           <div className="container">
  //             <div className="row align-items-center">
  //               <FancyBanner />
  //             </div>
  //             {/* End .row */}
  //           </div>
  //           {/* End .container */}
  //         </div>
  //       </div>
  //     </div>
  //     {/* <!-- /.fancy-banner-three --> */}
  //     {/* <!--
  // 		=====================================================
  // 		Contact Section One
  // 		=====================================================
  // 		--> */}
  //     <div className="contact-section-one mt-120 mb-80 lg-mt-80 lg-mb-40">
  //       <div className="container">
  //         <div className="row">
  //           <Address />
  //         </div>
  //       </div>
  //     </div>
  //     {/* <!-- /.contact-section-one --> */}
  //     {/* Footer : start */}
  //     <footer className="vcamp-footer-two pt-150 lg-pt-100">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-xl-3 col-lg-2 mb-40 d-flex align-items-center justify-content-center">
  //             <div className="logo">
  //               <Link to="/">
  //                 <img
  //                   src={require("../assets/images/logo/visLogo.png")}
  //                   alt="Vis Logo"
  //                   style={{ maxWidth: "200px", height: "auto" }}
  //                 />
  //               </Link>
  //               <p style={{ fontFamily: "Recoleta" }}>
  //                 We offer digital services in network benchmarking, software
  //                 development, and mobile network testing. Contact us for
  //                 details.
  //               </p>
  //             </div>
  //           </div>
  //           {/* End .col */}
  //           <FooterMenuList />
  //         </div>
  //       </div>
  //       {/* End .container */}
  //       <div className="container">
  //         <div className="bottom-footer">
  //           <CopyrightFooter />
  //         </div>
  //       </div>
  //       {/* End .container */}
  //     </footer>
  //     {/* Footer : End */}
  //   </div>
  //   // End .main-page-wrapper
  // );
};

export default Projects;
