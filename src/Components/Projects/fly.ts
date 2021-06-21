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
    align-self: center;
    width: 770px;
    z-index: 2;
  }

  img.fly2 {
    width: 780px;
    position: absolute;
    left: -130px;
    bottom: -60px;
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
      left: -170px;
    }

    to {
      opacity: 1;
      left: -130px;
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
