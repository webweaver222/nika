import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Pages } from "../pages/Routes";

const App = function App() {
  return (
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
  );
};

export default withRouter(App);
