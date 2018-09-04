import React from "react";

import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import Section from "../Section/index.js";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Section />
        <div style={{ height: "1000px", backgroundColor: "#3a1311" }}>
          This is a description body!
        </div>
        <Footer />
      </div>
    );
  }
}

export default Page;
