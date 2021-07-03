import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const NavBar = React.lazy(() => import("./components/NavBar/NavBar"));
const Action = React.lazy(() => import("./pages/Action"));
const Animation = React.lazy(() => import("./pages/Animation"));
const Crime = React.lazy(() => import("./pages/Crime"));
const Drama = React.lazy(() => import("./pages/Drama"));
const Fantasy = React.lazy(() => import("./pages/Fantasy"));
const Home = React.lazy(() => import("./pages/Home"));
const Horror = React.lazy(() => import("./pages/Horror"));

function Routes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="background title">
          <NavBar />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/action" component={Action} />
            <Route exact path="/animation" component={Animation} />
            <Route exact path="/crime" component={Crime} />
            <Route exact path="/drama" component={Drama} />
            <Route exact path="/fantasy" component={Fantasy} />
            <Route exact path="/horror" component={Horror} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default Routes;
