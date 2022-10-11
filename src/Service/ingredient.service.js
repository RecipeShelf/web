import RecipeShelfService from "./recipeshelf.service";

/**
 * An Ingredient
 * @typedef {Object} Ingredient
 * @property { string} _id
 * @property { Date} lastModified
 * @property { string[]} names
 * @property { string} description
 * @property { string} category
 * @property { boolean} vegan
 */

/**
 * Service to get ingredient related data
 */
class IngredientService extends RecipeShelfService {
  constructor() {
    super("ingredient");
  }

  /**
   * Returns ingredient summaries
   * @return {Summary[]}
   */
  getIngredientSummaries = () => {
    return this.findSummaries({});
  };

  /**
   * Returns an ingredient
   * @param {Summary} summary
   * @return {Ingredient}
   */
  getIngredient = summary => {
    return this.findItem(summary);
  };

  getCategories = () => {
    return this.getDistinct("category");
  };
}

export default IngredientService;
