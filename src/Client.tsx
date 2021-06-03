import React from "react";
import ReactDOM from "react-dom";

import App from "../src/Components/app";
import GlobalStyles from "./Components/globalStyles";
import { BrowserRouter } from "react-router-dom";

import "./Html/scripts";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";

const entryBlock = document.getElementById("root");
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <BrowserRouter basename="/adonika">
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  entryBlock
);
