import React, { Fragment } from "react";
import ISO_27001IMAGE from "../../assets/images/media/ISO_27001.png";
import ISO_9001IMAGE from "../../assets/images/media/ISO_9001.png";

const Certification = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-12 title-style-one text-center">
          <h3 className="title">
            We Are <span> ISO Certified </span>
          </h3>
        </div>
      </div>
      <div
        className="row mt-50"
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ marginLeft: "30px", width: "16%", height: "auto" }}
            src={ISO_9001IMAGE}
            alt="Certification"
          />
          <img
            style={{ marginLeft: "30px", width: "16%", height: "auto" }}
            src={ISO_27001IMAGE}
            alt="Certification"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <center>
            <p
              style={{
                fontSize: "16px",
                textAlign: "justify",
                fontFamily: "Recoleta",
              }}
            >
              Laborum laborumtempor anim veniam. Et nulla proident minim
              ullamco. Reprehenderit ullamco ut proident laboris proident
              consequat enim consequat do enim minim. Velit ea sunt minim enim
              est ea duis. Consectetur fugiat voluptate sunt ea officia ut.
              Laboris consequat laborum sit minim quis deserunt veniam pariatur
              cupidatat ex ad tempor. Ipsum labore occaecat excepteur magna qui
              ut reprehenderit aliquip anim.
            </p>
            <p
              style={{
                fontSize: "16px",
                textAlign: "justify",
                fontFamily: "Recoleta",
              }}
            >
              Laborum laborum tempor anim veniam. Et nulla proident minim
              ullamco. Reprehenderit ullamco ut proident laboris proident
              consequat enim consequat do enim minim. Velit ea sunt minim enim
              est ea duis. Consectetur fugiat voluptate sunt ea officia ut.
              Laboris consequat laborum sit minim quis deserunt veniam pariatur
              cupidatat ex ad tempor. Ipsum labore occaecat excepteur magna qui
              ut reprehenderit aliquip anim.
            </p>
          </center>
        </div>
      </div>
    </Fragment>
  );
};

export default Certification;
