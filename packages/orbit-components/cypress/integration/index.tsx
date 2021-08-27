import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider, defaultTheme } from "../..";
import LockScrolling from "./pages/lock-scrolling";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Switch>
          <Route path="/lock-scrolling">
            <LockScrolling />
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

render(<App />, document.querySelector("#app"));
