import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";

ReactDOM.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById("example")
);
