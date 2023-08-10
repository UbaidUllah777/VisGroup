import React from "react";

const AccordionOne = () => {
  const accordionContent = [
    {
      id: "1",
      dataBsTarget: "#collapseOne",
      dataBsTargetId: "collapseOne",
      arialExpand: "true",
      title: "Our Vision",
      descriptions: `Fugiat mollit qui tempor cillum do. Veniam ea reprehenderit aute labore aliqua occaecat laborum commodo elit eu. Nisi sint culpa quis tempor nulla nisi labore est amet Lorem dolore. Occaecat dolore proident excepteur eu dolore laborum commodo ullamco. Tempor voluptate consequat adipisicing fugiat. Id esse duis amet esse dolore culpa aute proident ut officia occaecat.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
    {
      id: "2",
      dataBsTarget: "#collapseTwo",
      dataBsTargetId: "collapseTwo",
      arialExpand: "false",
      title: "What’s our goal?",
      descriptions: `Fugiat mollit qui tempor cillum do. Veniam ea reprehenderit aute labore aliqua occaecat laborum commodo elit eu. Nisi sint culpa quis tempor nulla nisi labore est amet Lorem dolore. Occaecat dolore proident excepteur eu dolore laborum commodo ullamco. Tempor voluptate consequat adipisicing fugiat. Id esse duis amet esse dolore culpa aute proident ut officia occaecat.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
    {
      id: "3",
      dataBsTarget: "#collapseThree",
      dataBsTargetId: "collapseThree",
      arialExpand: "false",
      title: "Our vision",
      descriptions: `Fugiat mollit qui tempor cillum do. Veniam ea reprehenderit aute labore aliqua occaecat laborum commodo elit eu. Nisi sint culpa quis tempor nulla nisi labore est amet Lorem dolore. Occaecat dolore proident excepteur eu dolore laborum commodo ullamco. Tempor voluptate consequat adipisicing fugiat. Id esse duis amet esse dolore culpa aute proident ut officia occaecat.`,
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
