import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/wispa/wispaBg.jpg";

const Wispa = styled(Project)`
  background-color: #d64847;
  background: url(${bg}) no-repeat center;
  background-size: cover;

  .project-text {
    color: #fff;
    display: ${(props: { easyCycleInView: boolean }) =>
      props.easyCycleInView ? "block" : "none"};

    p {
      width: 380px;
      line-height: 28px;
    }
  }

  img {
    display: ${(props: { easyCycleInView: boolean }) =>
      props.easyCycleInView ? "inline-block" : "none"};
  }

  img.wispa1 {
    bottom: -180px;
    animation: fadeInWispa1 1s;
    right: -32px;
    z-index: 3;
  }

  img.wispa2 {
    animation: fadeInWispa2 1s;
    z-index: 2;
    position: absolute;
    right: 240px;
    bottom: -300px;
  }

  @keyframes fadeInWispa1 {
    from {
      opacity: 0;
      right: -100px;
    }

    to {
      opacity: 1;
      right: -32px;
    }
  }

  @keyframes fadeInWispa2 {
    from {
      opacity: 0;
      bottom: -400px;
    }

    to {
      opacity: 1;
      bottom: -300px;
    }
  }

  @media only screen and (max-width: 480px) {
    .project-text {
      p {
        width: initial;
        padding: 0 22px;
        line-height: 20px;
      }
    }

    img {
      width: 280px;
      transform: translate(-50%, -50%);
    }

    img.wispa1 {
      position: absolute;
      bottom: initial;
      right: initial;
      top: 65%;
      left: 45%;
      z-index: 0;
    }

    img.wispa2 {
      position: absolute;
      bottom: initial;
      right: initial;
      top: 55%;
      left: 55%;
      z-index: 1;
    }

    @keyframes fadeInWispa1 {
      from {
        opacity: 0;
        left: 0%;
      }

      to {
        opacity: 1;
        left: 45%;
      }
    }

    @keyframes fadeInWispa2 {
      from {
        opacity: 0;
        left: 120%;
      }

      to {
        opacity: 1;
        left: 55%;
      }
    }
  }
`;

export default Wispa;
