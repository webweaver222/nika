import styled from "styled-components";

const Project = styled.div`
  height: 751px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
  margin-top: 2px;

  .project-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .project-text {
    margin: auto 0 auto 0;
    animation: fadein 1.4s;

    h2 {
      font-size: 50px;
      letter-spacing: 2px;
      font-family: "mont-bold";
      margin-bottom: 25px;
      text-transform: uppercase;
    }
    p {
      font-size: 21px;
      letter-spacing: 1px;
      font-family: "mont-reg";
    }
  }

  .project-shading {
    position: absolute;
    z-index: 8;
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

  .project-images {
    display: flex;
    align-items: flex-end;
  }

  .section-img {
    position: relative;
  }

  @media only screen and (max-width: 480px) {
    padding: 0 15px 0 15px;

    .project-content {
      flex-direction: column;
      justify-content: flex-start;
    }

    .project-text {
      text-align: center;
      margin: 30px 0 0 0;

      h2 {
        font-size: 20px;
        margin-bottom: 15px;
      }

      p {
        line-height: 14px;
        font-size: 12px;
      }
    }
  }
`;
export default Project;
