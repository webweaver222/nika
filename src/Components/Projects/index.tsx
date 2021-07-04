import React from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import EasyCycle from "./easyCycle";
import Megasport from "./megasport";
import Casino from "./casino";
import Fly from "./fly";
import Wispa from "./wispa";

import { useInView } from "react-intersection-observer";
import easycycle1 from "resources/images/easycycle/easycycle1.png";
import easycycle2 from "resources/images/easycycle/easycycle2.png";
import megasport1 from "resources/images/megasport/megasport1.png";
import megasport2 from "resources/images/megasport/megasport2.png";
import casino1 from "resources/images/casino/casino1.png";
import casino2 from "resources/images/casino/casino2.png";
import fly1 from "resources/images/fly/fly1.png";
import fly2 from "resources/images/fly/fly2.png";
import wispa1 from "resources/images/wispa/wispa1.png";
import wispa2 from "resources/images/wispa/wispa2.png";

const Projects = ({ history }: { history: History }) => {
  const { ref: easyCycleRef, inView: easyCycleInView } = useInView({
    threshold: 0.25,
  });

  const { ref: megasportRef, inView: megasportInView } = useInView({
    threshold: 0.25,
  });

  const { ref: casinoRef, inView: casinoInView } = useInView({
    threshold: 0.25,
  });

  const { ref: flyRef, inView: flyInView } = useInView({
    threshold: 0.15,
  });

  const { ref: wispaRef, inView: wispaInView } = useInView({
    threshold: 0.25,
  });

  return (
    <>
      <EasyCycle
        easyCycleInView={easyCycleInView}
        ref={easyCycleRef}
        onClick={() => history.push("easycycle")}
      >
        <div className="project-content container">
          <div className="project-text">
            <h2>Easycycle</h2>
            <p>App for bycycle sharing</p>
          </div>

          <div className="project-images">
            <img
              src={easycycle2}
              alt="easycycle2"
              className="section-img easycycle2"
            />
            <img
              src={easycycle1}
              alt="easycycle1"
              className="section-img easycycle1"
            />
          </div>
        </div>
        {<div className="project-shading"></div>}
      </EasyCycle>

      <Megasport
        ref={megasportRef}
        megasportInView={megasportInView}
        onClick={() => history.push("megasport")}
      >
        <div className="project-content container">
          <div className="project-images">
            <img
              src={megasport2}
              alt="megasport2"
              className="section-img megasport2"
            />
            <img
              src={megasport1}
              alt="megasport1"
              className="section-img megasport1"
            />
          </div>

          <div className="project-text">
            <h2>Megasport</h2>
            <p>E-commerce mobile app</p>
          </div>
        </div>
        <div className="project-shading"></div>
      </Megasport>

      <Casino
        ref={casinoRef}
        casinoInView={casinoInView}
        onClick={() => history.push("casino")}
      >
        <div className="project-content container">
          <div className="project-text">
            <h2>Top 777</h2>
            <p>Online casino</p>
          </div>

          <div className="project-images">
            <img src={casino1} alt="casino1" className="section-img casino1" />
            <img src={casino2} alt="casino2" className="section-img casino2" />
          </div>
        </div>
        <div className="project-shading"></div>
      </Casino>

      <Fly
        ref={flyRef}
        flyInView={flyInView}
        onClick={() => history.push("fly")}
      >
        <div className="project-content container">
          <div className="project-images">
            <img src={fly1} alt="fly1" className="section-img fly1" />
            <img src={fly2} alt="fly2" className="section-img fly2" />
          </div>

          <div className="project-text">
            <h2>DATUFly</h2>
            <p className="top">Drone app</p>
            <p>For automatic data acquisition</p>
          </div>
        </div>
        <div className="project-shading"></div>
      </Fly>

      <Wispa
        easyCycleInView={wispaInView}
        ref={wispaRef}
        onClick={() => history.push("wispa")}
      >
        <div className="project-content container">
          <div className="project-text">
            <h2>Wispa</h2>
            <p>Marketplace that connects the Air Jordan fans</p>
          </div>

          <div className="project-images">
            <img src={wispa1} alt="wispa1" className="section-img wispa1" />
            <img src={wispa2} alt="wispa1" className="section-img wispa2" />
          </div>
        </div>
        {<div className="project-shading"></div>}
      </Wispa>
    </>
  );
};

export default withRouter(Projects);
