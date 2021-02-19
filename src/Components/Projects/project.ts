import styled from "styled-components";

const Project = styled.div`
  height: calc(70vh + 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
  margin-top: 20px;

  .project-content {
    width: 1050px;
    display: flex;
    justify-content: flex-start;
    position: relative;
  }

  .project-text {
    position: relative;
    z-index: 2;
    width: 350px;
    margin: auto 30px auto 0;
    animation: fadein 1s;

    h2 {
      font-size: 40px;
      letter-spacing: 3px;
      font-family: "mont-bold";
      margin-bottom: 25px;
    }
    p {
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 25px;
      padding: 0 60px 0 0;
      font-family: "mont-reg";
    }
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

  .section-img {
    position: relative;
    z-index: 2;
    height: 600px;
  }

  @media only screen and (min-width: 1600px) {
    .project-content {
      width: 1250px;
    }

    .project-text {
      margin-right: 170px;
    }
  }
`;
export default Project;
