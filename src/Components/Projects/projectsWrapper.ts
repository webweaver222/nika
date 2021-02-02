import styled from "styled-components";

const ProjectsWrapper = styled.div`
  margin-top: 20px;

  .easycycle {
    background-color: #d64847;
  }

  .project {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }

  .project-shading {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.25s ease;
    cursor: pointer;
  }

  .project-shading:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  .project .project-text {
    position: relative;
    z-index: 2;
    width: 350px;
    margin-right: 70px;
    animation: fadein 1s;
    display: ${(props) => (props.easyCycleInView ? "block" : "none")};
  }

  .easycycle1,
  .easycycle2 {
    position: relative;
    z-index: 2;
    height: 500px;
  }

  .easycycle1 {
    display: ${(props) => (props.easyCycleInView ? "inline-block" : "none")};
    bottom: -65px;
    animation: fadeInUp 0.7s;
  }

  .easycycle2 {
    display: ${(props) => (props.easyCycleInView ? "inline-block" : "none")};
    top: -65px;
    animation: fadeInDown 0.7s;
  }

  .project .project-text h2 {
    font-size: 40px;
    letter-spacing: 3px;
  }

  .project .project-text p {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 25px;
    padding: 0 60px 0 0;
  }
`;

export default ProjectsWrapper;
