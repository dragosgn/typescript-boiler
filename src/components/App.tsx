import * as React from "react";
import { Route, Link } from "react-router-dom";

const Greeting = () => <h1>Hello there</h1>;

export default () => (
  <div>
    <div>
      <Link to="/greeting">Greet</Link>
    </div>
    <div>
      <Route path="/greeting" component={Greeting} />
    </div>
  </div>
);
