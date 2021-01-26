import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../loader";

const ProjectWrapper = styled.div`
  img {
    width: 100%;
    visibility: ${(props) => (props.loaded ? "visible" : "hidden")};
  }
`;

const Project = ({ imgUrl }: { imgUrl: string }) => {
  const [imgLoaded, setLoaded] = useState(false);

  return (
    <ProjectWrapper loaded={imgLoaded}>
      {!imgLoaded && <Loader />}
      <img src={imgUrl} alt="easycycle" onLoad={() => setLoaded(true)} />
    </ProjectWrapper>
  );
};

export default Project;
