import React from "react";
import PropTypes from "prop-types";

import "./CategoryBox.scss";

const CategoryBox = ({ imgSrc, title }) => (
  <div className="category-box">
    <img className="thumbnail" src={imgSrc} />
    <div className="category-title">{title}</div>
  </div>
);

CategoryBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CategoryBox;
