import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/icon/icon_29.svg";
import icon2 from "../../assets/images/icon/icon_30.svg";
import icon3 from "../../assets/images/icon/icon_31.svg";
import icon4 from "../../assets/images/icon/icon_32.svg";

const FeatureSectionFour = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Dedicated Teams",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Speedy Resourse Mobilization",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "Presence In Multiple Locations",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 0,
    },
    {
      id: 4,
      icon: icon4,
      title: "Proven Track Record",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 100,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6" data-aos="fade-up">
            <div className="text-wrapper mb-130 lg-mb-70">
              <div className="title-style-one">
                <h2 className="title">
                  Why <br /> you <span>choose</span> Vis-Group.
                </h2>
              </div>
              <p className="meta-info-text ">
                As a distinguished global professional services and IT
                consultant firm, we specialize in a wide range of QA/QC testing,
                including user acceptance, network benchmark, infotainment, GCF
                testing, and software development services etc. Our experienced
                team of technicians excels in delivering comprehensive digital
                solutions worldwide.
              </p>
              <Link to="about-us" className="theme-btn-three">
                Learn more <i className="fas fa-angle-right"></i>
              </Link>
            </div>
            {/* <!-- /.text-wrapper --> */}
          </div>
          {/* End .col */}

          <div className="col-lg-6 ms-auto">
            <div className="row gx-5">
              {featureContent.map((feature, index) => (
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={feature.delayAnimation}
                  key={feature.id}
                >
                  <div className="card-style-four mb-25 lg-mb-70 d-flex align-items-center">
                    <div
                      className="number-icon tran3s"
                      style={{
                        backgroundColor: "#e16817",
                        padding: "10px",
                        color: "whitesmoke",
                        fontSize: "34px",
                        fontWeight: "bold",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="title">{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                  {/* <!-- /.card-style-four --> */}
                </div>
              ))}
            </div>
            {/* Emd .row .gx-5 */}
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </>
  );
};

export default FeatureSectionFour;
