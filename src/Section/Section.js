import React from "react";
import PropTypes from "prop-types";

import "./Section.scss";

const Section = ({ title, children }) => (
  <div className="section">
    <div className="section-title">{title}</div>
    <hr />
    <div className="section-children">{children}</div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
