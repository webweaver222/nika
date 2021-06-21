import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../loader";

const EasyCycleWrapper = styled.div`
  img {
    width: 100%;
    display: block;
    visibility: ${(props) => (props.loaded ? "visible" : "hidden")};
  }
`;

const EasyCycleProject = ({
  imgUrl,
  gifUrl,
}: {
  imgUrl: string;
  gifUrl: string;
}) => {
  const [imgLoaded, setLoaded] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  return (
    <EasyCycleWrapper loaded={imgLoaded}>
      {!imgLoaded && !gifLoaded && <Loader />}
      <img src={gifUrl} alt="easycycle" onLoad={() => setGifLoaded(true)} />
      <img src={imgUrl} alt="easycycle" onLoad={() => setLoaded(true)} />
    </EasyCycleWrapper>
  );
};

export default EasyCycleProject;
