import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import Section from "../Section/index.js";

// TODO: Remove as the Home, Collections, Cuisines are built
const Home = () => (
  <div>
    <Section title="Recipes for this week" />
    <Section title="Popular collections" />
    <Section title="Famous cuisines" />
  </div>
);

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
