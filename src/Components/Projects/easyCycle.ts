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
      props.easyCycleInView ? "block" : "none"};
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

  @media only screen and (max-width: 480px) {
    img {
      width: 300px;
      transform: translate(0, -50%);
    }

    img.easycycle1 {
      position: absolute;
      right: -25px;
      bottom: initial;
      top: 50%;
    }

    img.easycycle2 {
      position: absolute;
      left: -25px;
      bottom: initial;
      top: calc(50% + 36px);
    }

    @keyframes fadeInUpEasycycle1 {
      from {
        opacity: 0;
        top: 40%;
      }

      to {
        opacity: 1;
        top: 50%;
      }
    }

    @keyframes fadeInRightEasycycle2 {
      from {
        opacity: 0;
        left: -90px;
      }

      to {
        opacity: 1;
        left: -25px;
      }
    }
  }
`;

export default EasyCycle;
