import React from "react";

import Germany from "../../assets/images/flags/Germany.png";
import Pakistan from "../../assets/images/flags/Pakistan.png";
import UAE from "../../assets/images/flags/UnitedArabEmirates.png";
import Romania from "../../assets/images/flags/Romania.png";
import KSA from "../../assets/images/flags/SaudiArabia.png";
import UK from "../../assets/images/flags/UnitedKingdom.png";

const locationsContent = [
  // Germany
  {
    id: "GermanyId",
    country: "Germany",
    address: "Vision PS GmbH    Hansa Str 03 Duisburg, 47058, NRW",
    flag: Germany,
    phone: "+49-20334689340",
    mail: "abc@email.com",
  },

  // UAE
  {
    id: "UAEId",
    country: "UAE",
    address: `Al Mafaheem Technologies Office No.106 Behind Arouba street Al Nabaa, Sharjah, UAE`,
    flag: UAE,
    phone: "+971-65242268",
    mail: "abc@email.com",
  },

  // Romania
  {
    id: "RomaniaId",
    country: "Romania",
    address: `VISCOM Engineering Services S.R.L    Sediul RADU STANCA 2B/2,    CJ ROM 400355 CLUJ-NAPOCA`,
    flag: Romania,
    phone: "+40-364736499",
    mail: "abc@email.com",
  },

  // KSA
  {
    id: "KSAId",
    country: "KSA",
    address: `Attractive Vision IT Services    Malaz, Salahdin Al-Ayoube Road, 11417 Riyadh.`,
    flag: KSA,
    phone: "+966-558872066",
    mail: "abc@email.com",
  },

  // UK
  {
    id: "UKId",
    country: "UK",
    address: `Perform Engineering Services LTD    141B North Hyde Rd UB34 NS Hayes`,
    flag: UK,
    phone: "+44-7886720093",
    mail: "abc@email.com",
  },
  // Pakistan
  {
    id: "PakistanId",
    country: "Pakistan",
    address: "Islamabad, Pakistan",
    flag: Pakistan,
    phone: "+92-3159116035",
    mail: "info@bxtechnologies.com",
  },
];
const VisLocations = () => {
  return (
    <div className="row gx-0 ">
      {locationsContent.map((location) => (
        <div
          className="col-lg-5 col-3 mt-45"
          data-aos="fade-up"
          data-aos-delay={location.delayAnimation}
          key={location.id}
          style={{ margin: "10px" }}
        >
          <div className="card-style-seven" style={{ padding: "10px" }}>
            <div className="icon-title-container" style={{ display: "flex" }}>
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{
                  marginRight: "0px",
                  marginBottom: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <img
                  style={{ marginBottom: "0px", maxWidth: "32px" }}
                  src={location.flag}
                  alt="icon"
                />
              </div>
              <h4
                style={{
                  marginTop: "20px",
                  fontSize: "16px",
                  marginBottom: "0px",
                  fontFamily: "Recoleta",
                  fontWeight: "normal",
                  lineHeight: "1.16em",
                }}
              >
                {location.country}
              </h4>
            </div>
            <hr style={{ margin: "0px" }} />
            <p
              style={{
                marginTop: "12px",
                fontSize: "14px",
                marginBottom: "20px",
                fontFamily: "Recoleta",
                fontWeight: "normal",
                lineHeight: "1.16em",
              }}
            >
              {location.address}
            </p>
            <p
              style={{
                marginTop: "12px",
                fontSize: "14px",
                marginBottom: "20px",
                fontFamily: "Recoleta",
                fontWeight: "normal",
                lineHeight: "1.16em",
              }}
            >
              Phone:{" "}
              <a href={`tel:${location.phone}`}>
                <span style={{ color: "#e16817", fontSize: "12px" }}>
                  {location.phone}
                </span>
              </a>
            </p>
            <p
              style={{
                marginTop: "12px",
                fontSize: "14px",
                marginBottom: "20px",
                fontFamily: "Recoleta",
                fontWeight: "normal",
                lineHeight: "1.16em",
              }}
            >
              Email:{" "}
              <a href={`mailto:${location.mail}`}>
                {" "}
                <span style={{ color: "#e16817", fontSize: "12px" }}>
                  {location.mail}
                </span>
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisLocations;
