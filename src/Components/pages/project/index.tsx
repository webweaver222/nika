import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Project = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <ProjectWrapper>
      <img src={imgUrl} alt="easycycle" />
    </ProjectWrapper>
  );
};

export default Project;
