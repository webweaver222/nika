import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Pages } from "../pages/Routes";
import { ParallaxProvider } from "react-scroll-parallax";
const App = function App() {
  return (
    <ParallaxProvider>
      <Switch>
        {Pages.map((page, index) => {
          return (
            <Route
              exact
              path={page.link}
              component={page.component}
              key={index}
            />
          );
        })}
      </Switch>
    </ParallaxProvider>
  );
};

export default withRouter(App);
