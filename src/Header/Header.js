import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import rsLogo from "./images/rsLogo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="brand">
          <Link to="/">
            <img className="logo" src={rsLogo} alt="Recipe Shelf Logo" />
          </Link>
          <Link to="/">
            <span className="rs-orange">Recipe</span>
            <span className="rs-green">Shelf</span>
          </Link>
        </h1>
        <div>
          <Link to="/collections" className="link">
            Collections
          </Link>
          <Link to="/cuisines" className="link">
            Cuisines
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
