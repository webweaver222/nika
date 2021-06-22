import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/easycycle/easyBg.jpg";

const EasyCycle = styled(Project)`
  background-color: #d64847;
  margin-top: 0;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  //height: 751px;

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
    bottom: -130px;
    animation: fadeInUpEasycycle1 1s;
    right: -5px;
    z-index: 3;
  }

  img.easycycle2 {
    animation: fadeInRightEasycycle2 1s;
    z-index: 2;
    left: 160px;
    bottom: -265px;
  }

  @keyframes fadeInUpEasycycle1 {
    from {
      opacity: 0;
      bottom: -230px;
    }

    to {
      opacity: 1;
      bottom: -130px;
    }
  }

  @keyframes fadeInRightEasycycle2 {
    from {
      opacity: 0;
      left: 57px;
    }

    to {
      opacity: 1;
      left: 160px;
    }
  }
`;

export default EasyCycle;
