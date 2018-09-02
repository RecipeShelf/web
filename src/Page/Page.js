import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/index.js";

// TODO: Remove as the Home, Collections, Cuisines are built
const Home = () => <div>This is the home!</div>;
const Collections = () => <div>This is collections!</div>;
const Cuisines = () => <div>This is cuisines!</div>;

class Page extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/collections" component={Collections} />
          <Route path="/cuisines" component={Cuisines} />
        </div>
      </Router>
    );
  }
}

export default Page;
