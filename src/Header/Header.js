import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import rsLogo from "./images/rsLogo.png";

class Header extends React.Component {
  render() {
    return (
      <nav className="header background-overlay">
        <h1 className="brand">
          <Link to="/">
            <img className="logo" src={rsLogo} alt="Recipe Shelf Logo" />
          </Link>
          <Link to="/">
            <span className="rs-orange">Recipe</span>
            <span className="rs-green">Shelf</span>
          </Link>
        </h1>
        <div className="header-nav">
          <Link to="/collections" className="link link-header">
            Collections
          </Link>
          <Link to="/cuisines" className="link link-header">
            Cuisines
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
