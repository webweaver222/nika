import React from "react";
import IndexWrapper from "./indexWrapper";

import Header from "../header";
import Projects from "../Projects";

const App = () => {
  return (
    <IndexWrapper>
      <Header />
      <Projects />
      {/**
         <Header />
         <Projects/>
         */}
    </IndexWrapper>
  );
};

export default App;
