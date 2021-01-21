import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/app";
import GlobalStyles from "./Components/globalStyles";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <>
    <GlobalStyles />
    <App />{" "}
  </>,
  entryBlock
);
