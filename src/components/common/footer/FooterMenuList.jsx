import React from "react";
import { Link } from "react-router-dom";

const FooterMenuList = ({ className = "" }) => {
  const footerMenuContent = [
    // UseFull Links
    {
      id: "usefulLinks",
      title: "Useful Links",
      colClass: "col-lg-2 mx-lg-5",
      list: [
        { name: "Home", routeLink: "/" },
        { name: "About Us", routeLink: "/about-us" },
        { name: "Services", routeLink: "/services" },
        { name: "Projects", routeLink: "/projects" },
        { name: "Blogs", routeLink: "/blogs" },
        { name: "Contact Us", routeLink: "/contact-us" },
      ],
    },

    // Services
    {
      id: "services",
      title: "Services",
      colClass: "col-lg-3",
      list: [
        {
          name: "Network Benchmarking",
          routeLink: "/services/networkBenchmarking",
        },
        {
          name: "Field Performance Testing",
          routeLink: "/services/fieldPerformanceTesting",
        },
        {
          name: "Tuner and Media Testing",
          routeLink: "/services/TunerAndMediaTesting",
        },
        {
          name: "Software Development",
          routeLink: "/services/softwareDevelopmengt",
        },
      ],
    },

    // Legal
    {
      id: "legal",
      title: "Vis Group",
      colClass: "col-lg-3",
      list: [
        {
          name: "Vision Professional Services",
          routeLink: "/www.vision-ps.de",
        },
        {
          name: "Viscom Engineering Services",
          routeLink: "/www.viscom-es.de",
        },

        {
          name: "Perform Engineering Services",
          routeLink: "/www.perform-es.com",
        },

        {
          name: "BrainTime Technologies",
          routeLink: "/www.braintimetechnologies.com",
        },

        {
          name: "Al Mafaheem Technologies",
          routeLink: "/www.perform-es.com",
        },

        {
          name: "Attractive Vision IT Services",
          routeLink: "/www.perform-es.com",
        },
      ],
    },
  ];

  return (
    <>
      {footerMenuContent.map((menuItem) => (
        <div
          className={`${menuItem.colClass} col-md-3 col-sm-6 mb-40`}
          key={menuItem.id}
        >
          <h5 className="title">{menuItem.title}</h5>
          <ul className="footer-list style-none">
            {menuItem.list.map((list, i) => (
              <li key={i}>
                <Link to={list.routeLink}>{list.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenuList;
