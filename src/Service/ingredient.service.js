import RecipeShelfService from "./recipeshelf.service";

class IngredientService extends RecipeShelfService {
  constructor() {
    super("ingredient");
  }

  getIngredientSummaries = () => {
    return this.findSummaries({});
  };

  getIngredient = summary => {
    return this.findItem(summary);
  };

  getCategories = () => {
    return this.getDistinct("category");
  };
}

export default IngredientService;
