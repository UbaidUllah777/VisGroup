// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import ScrollTopBehaviour from "../components/elements/ScrollTopBehaviour";

// Pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Imprint from "../pages/Imprint";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import BlogDetail from "../pages/BlogDetail";

const VisRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* about us page  */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Blogs and Blog Detail */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

        {/* Contact */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Imprint */}
        <Route path="/imprint" element={<Imprint />} />

        {/* Imprint */}
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Terms and conditions */}
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Invalid URL */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default VisRoutes;
