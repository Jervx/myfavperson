import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ac } from "./Ac";

import Home from "./Home";
import secret from "./secret";

export default function App() {
  secret();

  return (
    <div className="bgder">
      <Router>
        <Switch>
          <Route path="/ac" component={Ac} />
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
