import React from "react";

const AccordionOne = () => {
  const accordionContent = [
    {
      id: "1",
      dataBsTarget: "#collapseOne",
      dataBsTargetId: "collapseOne",
      arialExpand: "true",
      title: "Our Vision",
      descriptions: `Vis Group envisions being the first choice of clients in telecommunications and
       technology services. With offices across Europe, Asia, and the Middle East, we offer
        innovative solutions in network benchmarking, certification forums, software
        development, and more. By leveraging our expertise and fostering strong client
         partnerships, we aim to shape the technological landscape, drive innovation,
         and empower businesses worldwide to achieve seamless connectivity and success.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
    {
      id: "2",
      dataBsTarget: "#collapseTwo",
      dataBsTargetId: "collapseTwo",
      arialExpand: "false",
      title: "What’s our goal",
      descriptions: `At Vis Group, our goal is to be the preferred partner for businesses 
      worldwide, providing exceptional telecommunications and technology services. With a
       strong presence in Germany and offices across Europe, Asia, and the Middle East,
       we are committed to delivering comprehensive solutions in network benchmarking,
        global certification forums, software development, mobile apps testing, and more.
        Our aim is to drive industry innovation, empower our clients with seamless
         connectivity, and exceed their expectations through our expertise, reliability,
          and customer-centric approach. By continuously enhancing our services and
           fostering collaborative relationships, we strive to be at the forefront
           of the ever-evolving technological landscape, bringing success to our clients
            and creating a connected world of limitless possibilities.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
    {
      id: "3",
      dataBsTarget: "#collapseThree",
      dataBsTargetId: "collapseThree",
      arialExpand: "false",
      title: "Our Mission",
      descriptions: `Vis Group is on a mission to revolutionize the telecommunications and 
      technology landscape.Our mission is to empower businesses worldwide by delivering
      innovative, reliable, and customized solutions that enhance connectivity, optimize
      performance, and drive growth. Through our expertise, collaborative partnerships,
      and relentless pursuit of excellence, we aim to be the trusted catalyst for
       technological advancement, enabling our clients to thrive in the digital age
       and shape a future where connectivity knows no bounds.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
  ];
  return (
    <>
      {accordionContent.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header">
            <button
              className={`accordion-button ${item.collapseItem}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={item.dataBsTarget}
              aria-expanded={item.arialExpand}
            >
              {item.title}
            </button>
          </div>
          <div
            id={item.dataBsTargetId}
            className={`accordion-collapse collapse ${item.itemShow}`}
            data-bs-parent="#accordionOne"
          >
            <div
              className="accordion-body"
              style={{ fontSize: "16px", textAlign: "justify" }}
            >
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionOne;
