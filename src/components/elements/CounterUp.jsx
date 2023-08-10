import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const counterUpContent = [
  {
    id: 1,
    startCount: "0",
    endCount: "14",
    endPointText: "+",
    meta: "Business Years",
    animationDelay: "0",
  },
  {
    id: 2,
    startCount: "0",
    endCount: "230",
    endPointText: "+",
    meta: "Satisfied Clients",
    animationDelay: "100",
  },
  {
    id: 3,
    startCount: "0",
    endCount: "600",
    endPointText: "+",
    meta: "Projects Delivery",
    animationDelay: "200",
  },

  {
    id: 4,
    startCount: "0",
    endCount: "200",
    endPointText: "+",
    meta: "Team Members",
    animationDelay: "200",
  },
];

const CounterUp = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="col-md-3"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="counter-block-three text-center mb-45">
            <div className="main-count font-recoleta">
              <span className="counter">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={5}
                >
                  {({ countUpRef }) => (
                    <InView
                      as="span"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </InView>
                  )}
                </CountUp>
              </span>
              {val.endPointText}
            </div>
            <p className="theme-mb-0">{val.meta}</p>
          </div>
          {/* <!-- /.counter-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default CounterUp;
