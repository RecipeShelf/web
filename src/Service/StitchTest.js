import React from "react";

import RecipeService from "./recipe.service";
import IngredientService from "./ingredient.service";

const recipeService = new RecipeService();
const ingredientService = new IngredientService();

const StitchTest = () => {
  recipeService.getRegions().then(r => log('Recipe regions', r));
  recipeService.getCuisines().then(r => log('Recipe cuisines', r));
  recipeService.getCollections().then(r => log('Recipe collections', r));
  recipeService.getRecipeSummaries().then(rs => {
    log('Recipe ids', rs.map(r => r._id));
    recipeService.getRecipe(rs[0]).then(rp => console.log(rp));
  });

  ingredientService.getCategories().then(i => log('Ingredient categories', i));
  ingredientService.getIngredientSummaries().then(is => {
    log('Ingredient ids', is.map(i => i._id));
    ingredientService.getIngredient(is[0]).then(ig => console.log(ig));
  });

  return <div>{"asdfasf"}</div>;
};

const log = (prefix, a) => {
  if (Array.isArray(a))
    console.log(prefix + ': [' + a + ']')
  else
    console.log(prefix + ': ' + a)
};

export default StitchTest;
