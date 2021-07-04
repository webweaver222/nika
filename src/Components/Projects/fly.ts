import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/fly/flyBg.jpg";

const Fly = styled(Project)`
  //background-color: #de9924;
  background: url(${bg}) no-repeat center;
  background-size: cover;

  .project-images {
    align-items: flex-end;
  }

  .project-text {
    text-align: start;
    display: ${(props: { flyInView: boolean }) =>
      props.flyInView ? "block" : "none"};
  }

  .project-text h2,
  .project-text p {
    color: #404040;
  }

  p.top {
    margin-bottom: 15px;
  }

  img {
    display: ${(props: { flyInView: boolean }) =>
      props.flyInView ? "inline-block" : "none"};
  }

  img.fly1 {
    animation: fadeInRightFly1 1s;
    position: absolute;
    width: 670px;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 75px;
    margin: auto 0;
    padding-bottom: 50px;
  }

  img.fly2 {
    width: 680px;
    align-self: center;
    left: -43px;
    bottom: -80px;
    animation: fadeInLeftFly2 1s;
    z-index: 3;
  }

  @keyframes fadeInRightFly1 {
    from {
      opacity: 0;
      top: -70px;
    }

    to {
      opacity: 1;
      top: 0;
    }
  }

  @keyframes fadeInLeftFly2 {
    from {
      opacity: 0;
      left: -120px;
    }

    to {
      opacity: 1;
      left: -43px;
    }
  }

  @media only screen and (min-width: 1700px) {
    img.casino1 {
      //height: 650px;
    }

    img.casino2 {
      //width: 440px;
    }
  }
`;

export default Fly;
