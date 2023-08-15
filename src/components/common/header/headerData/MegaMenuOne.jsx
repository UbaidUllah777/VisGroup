import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink";
import logo from "../../../../assets/images/logo/visMobileViewLogo.png";

// Data
import { serviceContent } from "../../../services/Services";

const MegaMenuOne = () => {
  const [toggleType, setToggleType] = useState(() =>
    window.innerWidth < 991 ? "dropdown" : "dropdown-item"
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 991) {
        setToggleType("dropdown");
      } else {
        setToggleType("dropdown-item");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brnad */}

      {/* home */}
      <li className="nav-item ">
        <CustomLink to="/" className="nav-link">
          <span>Home</span>
        </CustomLink>
      </li>

      {/* About Us */}
      <li className="nav-item ">
        <CustomLink to="/about-us" className="nav-link">
          <span>About Us</span>
        </CustomLink>
      </li>

      {/* Sevices */}
      <li className="nav-item dropdown mega-dropdown-md">
        <button
          className="nav-link nav-item dropdown-toggle"
          data-bs-toggle={toggleType}
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <CustomLink to="/services">Services</CustomLink>
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="row">
              {serviceContent.map((serviceGroup) => (
                <div className="col-lg-3" key={serviceGroup.id}>
                  <div className="menu-column">
                    <h6 className="mega-menu-title">
                      {serviceGroup.areaTitle}
                    </h6>
                    <ul className="style-none mega-dropdown-list">
                      {serviceGroup.areaServices.map((list, i) => (
                        <li key={i}>
                          <CustomLink
                            to={`/services/${list.id}`}
                            className="dropdown-item"
                          >
                            <span>{list.title}</span>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </li>

      {/* Projects */}
      <li className="nav-item ">
        <CustomLink to="/projects" className="nav-link">
          <span>Projects</span>
        </CustomLink>
      </li>

      {/* BLogs */}
      <li className="nav-item ">
        <CustomLink to="/blogs" className="nav-link">
          <span>Blogs</span>
        </CustomLink>
      </li>

      {/* Contact Us */}
      <li className="nav-item ">
        <CustomLink to="/contact-us" className="nav-link">
          <span>Contact Us</span>
        </CustomLink>
      </li>
    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
