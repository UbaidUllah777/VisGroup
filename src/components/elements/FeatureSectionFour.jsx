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
      description: `Our dedicated teams excel in seamless communication and collaboration. We closely analyze your requirements, challenges, and goals to provide customized solutions that align with your vision.`,
      delayAnimation: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Measurement Vehicals",
      description: `Eliminating the need for a permanent vehicle fleet investment, we provide preset measurement vehicles specifically tailored for the duration of your project.`,
      delayAnimation: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "Global Presence",
      description: `Harnessing a global presence, we prioritize forging robust client relationships. Our unwavering commitment to exceptional service and support transcends borders.`,
      delayAnimation: 0,
    },
    {
      id: 4,
      icon: icon4,
      title: "Competitive Budgeting",
      description: `Through our extensive work experience, we have developed a proactive approach to anticipate and effectively manage unforeseen situations from the outset, mitigating cost escalation.`,
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
