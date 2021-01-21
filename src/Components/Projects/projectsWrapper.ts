import styled from "styled-components";

const ProjectsWrapper = styled.div`
  margin-top: 20px;

  .easycycle {
    background-color: #d64847;
  }

  .project {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .project .project-text {
    width: 300px;
    margin-right: 70px;
    animation: fadein 1s;
    display: ${props => props.easyCycleInView? 'block': 'none'};
  }


  .easycycle1,
  .easycycle2 {
    position: relative;
    height: 550px;
  }

  .easycycle1 {
    display: ${props => props.easyCycleInView? 'inline-block': 'none'};
    bottom: -50px;
    animation: fadeInUp .7s;
  }

  .easycycle2 {
    display: ${props => props.easyCycleInView? 'inline-block': 'none'};
    top: -50px;
    animation: fadeInDown .7s;
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
