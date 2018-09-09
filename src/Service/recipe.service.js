import RecipeShelfService from "./recipeshelf.service";

class RecipeService extends RecipeShelfService {
  constructor() {
    super("recipe");
  }

  getRecipeSummaries = () => {
    return this.findSummaries({});
  };

  getRecipe = summary => {
    return this.findItem(summary);
  };

  getRegions = () => {
    return this.getDistinct("region");
  };

  getCuisines = () => {
    return this.getDistinct("cuisine");
  };

  getCollections = () => {
    return this.getDistinct("collections");
  };
}

export default RecipeService;
