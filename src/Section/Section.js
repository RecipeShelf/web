import React from "react";
import PropTypes from "prop-types";

import "./Section.scss";

const Section = props => (
  <div className="section">
    <div className="section-title">{props.title}</div>
    <hr />
    <div>This is a body</div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
