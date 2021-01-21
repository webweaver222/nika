import React from "react";

import ProjectsWrapper from "./projectsWrapper";
import { useInView } from "react-intersection-observer";

import easycycle1 from "../../resources/images/easycycle1.png";
import easycycle2 from "../../resources/images/easycycle2.png";

const Projects: React.FunctionComponent = () => {
  const {ref : easyCycleRef, inView : easyCycleInView} = useInView({
    /* Optional options */
    threshold: .33,
  });

  

  return (
    <ProjectsWrapper easyCycleInView = {easyCycleInView}>
      <div className="project easycycle" ref={easyCycleRef}>
        <div className="project-text">
          <h2>Easycycle - </h2>
          <p>Moscow based company for bicycle sharing</p>
        </div>

        <div className="project-images" >
          <img
            src={easycycle1}
            alt="easycycle1"
            className="easycycle1"
          />
          <img src={easycycle2} alt="easycycle2" className="easycycle2" />
        </div>
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
