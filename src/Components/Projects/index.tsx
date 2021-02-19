import React from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import EasyCycle from "./easyCycle";
import Megasport from "./megasport";
import { useInView } from "react-intersection-observer";

import easycycle1 from "resources/images/easycycle/easycycle1.png";
import easycycle2 from "resources/images/easycycle/easycycle2.png";
import megasport1 from "resources/images/megasport/megasport1.png";
import megasport2 from "resources/images/megasport/megasport2.png";

const Projects = ({ history }: { history: History }) => {
  const { ref: easyCycleRef, inView: easyCycleInView } = useInView({
    threshold: 0.33,
  });

  const { ref: megasportRef, inView: megasportInView } = useInView({
    threshold: 0.33,
  });

  return (
    <>
      <EasyCycle
        easyCycleInView={easyCycleInView}
        ref={easyCycleRef}
        onClick={() => history.push("easycycle")}
      >
        <div className="project-content">
          <div className="project-text">
            <h2>Easycycle - </h2>
            <p>Moscow based company for bicycle sharing</p>
          </div>

          <div className="project-images">
            <img
              src={easycycle1}
              alt="easycycle1"
              className="section-img easycycle1"
            />
            <img
              src={easycycle2}
              alt="easycycle2"
              className="section-img easycycle2"
            />
          </div>
        </div>
        <div className="project-shading"></div>
      </EasyCycle>

      {/*///////////////////////////////////////////////////////////////////////////////////////// */}
      <Megasport
        ref={megasportRef}
        megasportInView={megasportInView}
        onClick={() => history.push("megasport")}
      >
        <div className="project-content">
          <div className="project-text">
            <h2>Megasport</h2>
            <p>E-commerce mobile app</p>
          </div>

          <div className="project-images">
            <img
              src={megasport1}
              alt="megasport1"
              className="section-img megasport1"
            />
            <img
              src={megasport2}
              alt="megasport2"
              className="section-img megasport2"
            />
          </div>
        </div>
        <div className="project-shading"></div>
      </Megasport>
    </>
  );
};

export default withRouter(Projects);
