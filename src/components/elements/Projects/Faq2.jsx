import React from "react";
import { Link } from "react-router-dom";
import ProjectsTable from "./ProjectsTable";

const Faq2 = () => {
  const menuList = [
    { id: "all", name: "All", isActive: "active", targetNav: "#all" },
    { id: "Germany", name: "Germany", isActive: "", targetNav: "#Germany" },
    { id: "Korea", name: "Korea", isActive: "", targetNav: "#Korea" },
    {
      id: "UnitedKingdom",
      name: "UK",
      isActive: "",
      targetNav: "#UnitedKingdom",
    },
    { id: "Pakistan", name: "Pakistan", isActive: "", targetNav: "#Pakistan" },
  ];

  return (
    <div className="col-12   m-auto ">
      <ul className="nav nav-tabs justify-content-center " role="tablist">
        {menuList.map((menu) => (
          <li className="nav-item" key={menu.id}>
            <button
              style={{ color: "black" }}
              className={`nav-link ${menu.isActive}`}
              data-bs-toggle="tab"
              data-bs-target={menu.targetNav}
              role="tab"
            >
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
      {/* End nav-item */}

      <div className="tab-content mt-110 lg-mt-60">
        <div className="tab-pane fade show active" id="all" role="tabpanel">
          <ProjectsTable selectedCountryId="all" />
        </div>

        <div className="tab-pane fade" id="Germany" role="tabpanel">
          <ProjectsTable selectedCountryId="Germany" />
        </div>

        <div className="tab-pane fade" id="Korea" role="tabpanel">
          <ProjectsTable selectedCountryId="Korea" />
        </div>

        <div className="tab-pane fade" id="UnitedKingdom" role="tabpanel">
          <ProjectsTable selectedCountryId="UnitedKingdom" />
        </div>

        <div className="tab-pane fade" id="Pakistan" role="tabpanel">
          <ProjectsTable selectedCountryId="Pakistan" />
        </div>
      </div>
      {/* <!-- /.tab-content --> */}

      <div className="request-faq text-center pt-90 lg-pt-70">
        <h2 className="font-recoleta">Want to discuss your project?</h2>
        <Link to="/contact-us" className="theme-btn-four ripple-btn">
          CONTACT US
        </Link>
      </div>
      {/* <!-- /.request-faq --> */}
    </div>
  );
};

export default Faq2;
