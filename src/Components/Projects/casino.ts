import styled from "styled-components";
import Project from "./project";

const Casino = styled(Project)`
  background-color: #de9924;

  .project-images {
    align-items: center;
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
    margin: auto 0;
    width: 700px;
    z-index: 2;
    animation: fadeInRightCasino1 0.7s;
    z-index: 2;
    right: 30px;
    //top: 40px;
  }

  img.casino2 {
    position: absolute;
    width: 340px;
    right: -40px;
    animation: fadeInLeftCasino2 0.9s;
    z-index: 3;
    top: calc(50% - 50px);
    transform: translateY(-50%);
  }

  @keyframes fadeInRightCasino1 {
    from {
      opacity: 0;
      right: 60px;
    }

    to {
      opacity: 1;
      right: 30px;
    }
  }

  @keyframes fadeInLeftCasino2 {
    from {
      opacity: 0;
      right: -120px;
    }

    to {
      opacity: 1;
      right: -40px;
    }
  }

  @media only screen and (min-width: 1700px) {
    img.casino1 {
      height: 650px;
    }

    img.casino2 {
      width: 440px;
    }
  }
`;

export default Casino;
