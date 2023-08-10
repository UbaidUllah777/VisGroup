import React, { useState } from "react";
import { Link } from "react-router-dom";

import MegaMenuOne from "../header/headerData/MegaMenuOne";
import MobileMenuContent from "../header/headerData/MobileMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-two ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img
                src={require("../../../assets/images/logo/visLogo.png")}
                alt="Vis Logo"
                style={{ height: "40px" }}
              />
            </Link>
          </div>
          {/* End .logo */}

          <nav className="navbar navbar-expand-lg align-items-center">
            <button
              className="navbar-toggler d-block d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            {/* End navbar-toggler */}

            <div className="collapse navbar-collapse " id="navbarNav">
              <MegaMenuOne />
              {/* End MegaMenuOne */}
              <div className="mobile-content d-block d-lg-none">
                <MobileMenuContent />
                {/* <!-- /.mobile-content --> */}
              </div>
            </div>
            {/* End .collapse */}
          </nav>
          {/* End .navbar */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
