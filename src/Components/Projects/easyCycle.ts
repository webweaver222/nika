import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/easycycle/easyBg.jpg";

const EasyCycle = styled(Project)`
  background-color: #d64847;
  margin-top: 0;
  background: url(${bg}) no-repeat center;
  background-size: cover;

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
    bottom: -73px;
    animation: fadeInUpEasycycle1 0.7s;
    //right: -15px;
    z-index: 3;
  }

  img.easycycle2 {
    animation: fadeInRightEasycycle2 0.7s;
    z-index: 2;
    left: 93px;
    bottom: -197px;
  }

  @keyframes fadeInUpEasycycle1 {
    from {
      opacity: 0;
      bottom: -120px;
    }

    to {
      opacity: 1;
      bottom: -73px;
    }
  }

  @keyframes fadeInRightEasycycle2 {
    from {
      opacity: 0;
      left: 60px;
    }

    to {
      opacity: 1;
      left: 93px;
    }
  }
`;

export default EasyCycle;
