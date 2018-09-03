import React from "react";

import "./Footer.scss";
import netiflyDark from "./images/netiflyDark.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <span className="footer-links">
              <a href="/terms" className="link link-footer">
                Terms of Service
              </a>
              <a href="/privacy" className="link link-footer">
                Privacy Policy
              </a>
              <a href="/credits" className="link link-footer">
                Credits
              </a>
              <a href="/about" className="link link-footer">
                About
              </a>
            </span>
            <span className="copyright">Copyright © 2015 Recipe Shelf</span>
          </div>
          <hr />
          <span className="footer-text">
            By using this service, you accept our Terms of Service and Privacy
            Policy.
          </span>
        </div>
        <img className="netifly-logo" src={netiflyDark} alt="Netifly Logo" />
      </div>
    );
  }
}

export default Footer;
