import RecipeShelfService from "./recipeshelf.service";
// import { Summary } from "../Model/summary";
// import Recipe from "../Model/recipe";

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
