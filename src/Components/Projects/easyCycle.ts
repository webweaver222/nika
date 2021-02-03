import styled from "styled-components";
import Project from "./project";

const EasyCycle = styled(Project)`
  background-color: #d64847;

  .project-text {
    color: #fff;
    display: ${(props: { easyCycleInView: boolean }) =>
      props.easyCycleInView ? "block" : "none"};
  }

  img {
    display: ${(props: { easyCycleInView: boolean }) =>
      props.easyCycleInView ? "inline-block" : "none"};
  }

  img.easycycle1 {
    bottom: -65px;
    animation: fadeInUp 0.7s;
  }

  img.easycycle2 {
    top: -65px;
    animation: fadeInDown 0.7s;
  }
`;

export default EasyCycle;
