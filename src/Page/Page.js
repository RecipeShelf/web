import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import Home from "../Home/index.js";
import mockBackground from "./images/rs-back4.jpg";

// TODO: Remove as the Home, Collections, Cuisines are built
const Collections = () => <div>This is collections!</div>;
const Cuisines = () => <div>This is cuisines!</div>;

class Page extends React.Component {
  render() {
    return (
      <Router>
        <div
          style={{
            background: `#370b09 url(${mockBackground})
          no-repeat center center fixed`,
            backgroundSize: "cover"
          }}
        > {/* Temporary styling before rotating backgrounds*/}
          <Header />
          <div className="background-overlay">
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
