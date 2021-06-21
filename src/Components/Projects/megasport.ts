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
    //width: 355px;
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
`;

export default Megasport;
