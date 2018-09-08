import React from "react";

import Header from "../Header/index.js";
import Footer from "../Footer/index.js";

import StitchTest from "../Service/StitchTest";

class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ height: "1000px", backgroundColor: "#3a1311" }}>
          This is a description body!
        </div>
        <Footer />
        <StitchTest />
      </div>
    );
  }
}

export default Page;
