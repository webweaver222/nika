import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../loader";

const ProjectWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Project = ({ imgUrl }: { imgUrl: string }) => {
  const [imgLoaded, setLoaded] = useState(false);

  return (
    <ProjectWrapper>
      <img
        src={imgUrl}
        alt="easycycle"
        onLoad={() => setLoaded(true)}
        style={{ visibility: imgLoaded ? "visible" : "hidden" }}
      />

      {!imgLoaded && <Loader />}
    </ProjectWrapper>
  );
};

export default Project;
