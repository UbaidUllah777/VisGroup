import React from "react";
import { Link } from "react-router-dom";
import CopyrightSocial from "./CopyrightSocial";

const CopyrightFooter = () => {
  const footerList = [
    { id: 1, name: "Privacy Policy", routeLink: "/privacy" },
    { id: 2, name: "Imprint", routeLink: "/imprint" },
    { id: 3, name: "Terms & Conditions", routeLink: "/terms" },
  ];
  return (
    <div className="row">
      <div className="col-lg-5 order-lg-0 mb-15">
        <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
          {footerList.map((list) => (
            <li key={list.id}>
              <Link
                style={{ fontFamily: "Recoleta", fontSize: "14px" }}
                to={list.routeLink}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4 order-lg-2 mb-15">
        <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
          <CopyrightSocial />
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-3 order-lg-1 mb-15">
        <p className="copyright text-center" style={{ fontFamily: "Recoleta" }}>
          {" "}
          Copyright @ {new Date().getFullYear()}{" "}
          <a
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vis-Group
          </a>{" "}
        </p>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
