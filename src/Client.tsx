import React from "react";
import ReactDOM from "react-dom";

import App from "../src/Components/app";
import GlobalStyles from "./Components/globalStyles";
import { BrowserRouter } from "react-router-dom";

import "./Html/scripts";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <BrowserRouter basename="/nika">
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  entryBlock
);
