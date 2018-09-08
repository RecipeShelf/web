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
}

export default RecipeService;
