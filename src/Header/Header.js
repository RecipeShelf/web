import React from "react";

import "./Header.scss";
import rsLogo from "./images/rsLogo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="brand">
          <a href="/">
            <img className="logo" src={rsLogo} alt="Recipe Shelf Logo" />
          </a>
          <a href="/">
            <span className="rs-orange">Recipe</span>
            <span className="rs-green">Shelf</span>
          </a>
        </h1>
        <div>
          <a href="/collections" className="link link-header">
            Collections
          </a>
          <a href="/cuisines" className="link link-header">
            Cuisines
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
