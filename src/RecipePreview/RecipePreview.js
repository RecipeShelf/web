import React from "react";

import "./RecipePreview.scss";
import mockRecipeImg from "./images/mockRecipeImg.jpg";
import plainChili from "./images/plainChili.svg";
import redChili from "./images/redChili.svg";

const RecipePreview = () => (
  <div className="preview-box">
    <img className="thumbnail" src={mockRecipeImg} />
    <div className="preview-content">
      <div className="preview-title-line">
        <span className="preview-title">Recipe Title</span>
        <span className="preview-heat">
          <img className="chili" src={plainChili} />
          <img className="chili" src={plainChili} />
          <img className="chili" src={redChili} />
        </span>
      </div>
      <div className="preview-text">
        <div className="preview-desc">
          Lorem ipsum dolor sit amet, sit ne iudico tempor dicunt, mei fabulas
          periculis definitionem te, ius novum habemus et.
        </div>
        <div className="preview-time">10 minutes</div>
        <div className="preview-note">Note, if included</div>
        <hr className="preview-hr" />
        <div className="preview-button-line">
          <button className="preview-button">View Recipe</button>
          <span className="preview-ingredients">12 ingredients</span>
        </div>
      </div>
    </div>
  </div>
);

export default RecipePreview;
