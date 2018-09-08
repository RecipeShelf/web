import React from "react";

import RecipeService from "./recipe.service";

const service = new RecipeService();

const StitchTest = () => {
  console.log(service.getRecipeSummaries());
  return <div>{"asdfasf"}</div>;
};

export default StitchTest;
