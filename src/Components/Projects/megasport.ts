import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/megasport/megaBg.jpg";

const Megasport = styled(Project)`
  background-color: #e2e2e2;
  background: url(${bg}) no-repeat center;
  background-size: cover;

  .project-images {
    align-items: initial;
  }

  .project-text {
    text-align: start;
    display: ${(props: { megasportInView: boolean }) =>
      props.megasportInView ? "block" : "none"};
  }

  .project-text h2,
  .project-text p {
    color: #292929;
  }

  img {
    display: ${(props: { megasportInView: boolean }) =>
      props.megasportInView ? "inline-block" : "none"};
  }

  img.megasport1 {
    position: absolute;
    bottom: -150px;
    left: 320px;
    animation: fadeInUpMega1 1s;
  }

  img.megasport2 {
    align-self: flex-start;
    top: -92px;
    left: -60px;
    animation: fadeInDownMega2 1s;
  }

  @keyframes fadeInDownMega2 {
    from {
      opacity: 0;
      top: -160px;
    }

    to {
      opacity: 1;
      top: -92px;
    }
  }

  @keyframes fadeInUpMega1 {
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
    .project-content {
    }

    .project-text {
      text-align: center;
    }

    .project-images {
      justify-content: center;
    }

    img {
      width: 300px;
      transform: translate(0, -50%);
    }

    img.megasport1 {
      position: absolute;
      bottom: initial;
      top: calc(50% + 36px);
      left: 25px;
    }

    img.megasport2 {
      position: absolute;
      bottom: initial;
      top: 50%;
      left: -25px;
      z-index: 3;
    }

    @keyframes fadeInDownMega2 {
      from {
        opacity: 0;
        left: -60px;
      }

      to {
        opacity: 1;
        left: -25px;
      }
    }

    @keyframes fadeInUpMega1 {
      from {
        opacity: 0;
        top: 62%;
      }

      to {
        opacity: 1;
        top: calc(50% + 36px);
      }
    }
  }
`;

export default Megasport;
