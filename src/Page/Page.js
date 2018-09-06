import React from "react";

import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import Section from "../Section/index.js";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ backgroundColor: "#3a1311" }}> {/* Temporary div */}
          <Section title="Recipes for this week" />
          <Section title="Popular collections" />
          <Section title="Famous cuisines" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Page;
