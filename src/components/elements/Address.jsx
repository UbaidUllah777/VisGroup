import React from "react";
import icon1 from "../../assets/images/icon/icon_17.svg";
import icon2 from "../../assets/images/icon/icon_18.svg";
import icon3 from "../../assets/images/icon/icon_19.svg";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      title: "Our Address",
      descriptions: (
        <>
          <p>Vis Group, Hansa Str 03, 47058Duisburg, , NRW, Germany</p>
        </>
      ),
      delayAnimatinTime: 0,
      icon: icon1,
    },
    {
      id: 2,
      title: "Contact Info",
      descriptions: (
        <>
          <p>
            Email Us at <br />
            <a href="mailto:info@visgroup.eu" className="webaddress">
              info@visgroup.eu
            </a>
          </p>
        </>
      ),
      delayAnimatinTime: 100,
      icon: icon2,
    },
    {
      id: 3,
      title: "Call",
      descriptions: (
        <>
          <p>
            Give us call at <br />
            <a href="tel:+49-20334689340" className="call">
              +49-20334689340
            </a>
          </p>
        </>
      ),
      delayAnimatinTime: 200,
      icon: icon3,
    },
  ];
  return (
    <>
      {addressContent.map((val) => (
        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimatinTime}
          key={val.id}
        >
          <div className="address-block-one text-center mb-40">
            <div className="icon d-flex align-items-center justify-content-center m-auto">
              <img src={val.icon} alt="icon" />
            </div>
            <h5 className="title">{val.title}</h5>
            {val.descriptions}
          </div>
          {/* <!-- /.address-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default Address;
