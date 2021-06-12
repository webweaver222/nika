import styled from "styled-components";
import Project from "./project";
import bg from "resources/images/megasport/megaBg.jpg";

const Megasport = styled(Project)`
  background-color: #e2e2e2;
  background: url(${bg}) no-repeat center;
  background-size: cover;

  .project-images {
    align-items: flex-start;
  }

  .project-text {
    text-align: end;
    display: ${(props: { megasportInView: boolean }) =>
      props.megasportInView ? "block" : "none"};
  }

  .project-text h2,
  .project-text p {
    color: black;
  }

  img {
    width: 355px;
    display: ${(props: { megasportInView: boolean }) =>
      props.megasportInView ? "inline-block" : "none"};
  }

  img.megasport1 {
    top: 65px;
    left: -75px;
    animation: fadeInUpMega1 0.7s;
    z-index: 2;
  }

  img.megasport2 {
    top: -78px;
    left: -45px;
    animation: fadeInDownMega2 0.7s;
    z-index: 3;
  }

  @keyframes fadeInDownMega2 {
    from {
      opacity: 0;
      top: -140px;
    }

    to {
      opacity: 1;
      top: -78px;
    }
  }

  @keyframes fadeInUpMega1 {
    from {
      opacity: 0;
      top: 140px;
    }

    to {
      opacity: 1;
      top: 65px;
    }
  }
`;

export default Megasport;
