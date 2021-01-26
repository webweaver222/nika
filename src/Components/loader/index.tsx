import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;

  .lds-ripple {
    display: inline-block;
    position: absolute;
    width: 380px;
    height: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .lds-ripple div {
    position: absolute;
    border: 14px solid #d64847;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 166px;
      left: 166px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 350px;
      height: 350px;
      opacity: 0;
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
