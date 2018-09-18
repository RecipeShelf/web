import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import Home from "../Home/index.js";

// TODO: Remove as the Home, Collections, Cuisines are built
const Collections = () => <div>This is collections!</div>;
const Cuisines = () => <div>This is cuisines!</div>;

class Page extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* Temporary div */}
          <div style={{ backgroundColor: "#3a1311" }}>
            <Route exact path="/" component={Home} />
            <Route path="/collections" component={Collections} />
            <Route path="/cuisines" component={Cuisines} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Page;
