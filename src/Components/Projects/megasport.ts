import styled from "styled-components";
import Project from "./project";

const Megasport = styled(Project)`
  background-color: #e2e2e2;
  .project-text h2,
  .project-text p {
    color: black;
  }

  img {
    display: ${(props: { megasportInView: boolean }) =>
      props.megasportInView ? "inline-block" : "none"};
  }

  img.megasport1 {
    bottom: -65px;
    animation: fadeInUp 0.7s;
  }

  img.megasport2 {
    top: -65px;
    animation: fadeInDown 0.7s;
  }
`;

export default Megasport;
