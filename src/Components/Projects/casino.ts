import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/casino/bg.jpg";

const Casino = styled(Project)`
  background-color: #de9924;
  background: url(${bg}) no-repeat center;
  background-size: cover;

  .project-images {
    align-items: flex-end;
  }

  .project-text {
    text-align: start;
    display: ${(props: { casinoInView: boolean }) =>
      props.casinoInView ? "block" : "none"};
  }

  .project-text h2,
  .project-text p {
    color: #fff;
  }

  img {
    display: ${(props: { casinoInView: boolean }) =>
      props.casinoInView ? "inline-block" : "none"};
  }

  img.casino1 {
    position: absolute;
    animation: fadeInRightCasino1 1s;
    z-index: 2;
    left: 158px;
  }

  img.casino2 {
    animation: fadeInLeftCasino2 1s;
    z-index: 3;
    bottom: -150px;
    right: 50px;
  }

  @keyframes fadeInRightCasino1 {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeInLeftCasino2 {
    from {
      opacity: 0;
      bottom: -250px;
    }

    to {
      opacity: 1;
      bottom: -150px;
    }
  }

  @media only screen and (max-width: 480px) {
    .project-text {
      text-align: center;
    }

    .project-images {
      justify-content: center;
    }

    img {
      transform: translate(0, -50%);
    }

    img.casino1 {
      top: 50%;
      bottom: initial;
      left: initial;
      width: 700px;
      position: absolute;
    }

    img.casino2 {
      position: absolute;
      width: 150px;
      top: 60%;
      bottom: initial;
      right: -15px;
    }

    @keyframes fadeInRightCasino1 {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeInLeftCasino2 {
      from {
        opacity: 0;
        right: -95px;
      }

      to {
        opacity: 1;
        right: -15px;
      }
    }
  }
`;

export default Casino;
