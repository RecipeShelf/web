import React from "react";

import RecipeService from "./recipe.service";

const service = new RecipeService();

const StitchTest = () => {
  service.getRegions().then(r => console.log(r));
  service.getRecipeSummaries().then(r => {
    console.log(r);
    service.getRecipe(r[0]).then(rp => console.log(rp));
  });
  return <div>{"asdfasf"}</div>;
};

export default StitchTest;
