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
    right: -25px;
    z-index: 3;
  }

  img.wispa2 {
    animation: fadeInWispa2 1s;
    z-index: 2;
    position: absolute;
    right: 250px;
    bottom: -300px;
  }

  @keyframes fadeInWispa1 {
    from {
      opacity: 0;
      right: -100px;
    }

    to {
      opacity: 1;
      right: -25px;
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
`;

export default Wispa;
