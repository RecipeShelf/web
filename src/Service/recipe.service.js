import RecipeShelfService from "./recipeshelf.service";

/**
 * A RecipeItem
 * @typedef {Object} RecipeItem
 * @property {string} text;
 * @property {Decorator} decorator;
 */

/**
 * A Recipe
 * @typedef {Object} Recipe
 * @property {string} _id;
 * @property {Date} lastModified;
 * @property {string[]} names;
 * @property {string} description;
 * @property {RecipeItem[]} steps;
 * @property {number} totalTimeInMinutes;
 * @property {string} servings;
 * @property {boolean} approved;
 * @property {SpiceLevel} spiceLevel;
 * @property {string} region;
 * @property {string} ownerId;
 * @property {string} imageId;
 * @property {RecipeItem[]} ingredients;
 * @property {string} cuisine;
 * @property {string[]} ingredientIds;
 * @property {boolean} overnightPreparation;
 * @property {string[]} accompanimentIds;
 * @property {string[]} collections;
 * @property {boolean} vegan;
 */

/**
 * A Summary
 * @typedef {Object} Summary
 * @property {string} _id;
 * @property {string[]} names;
 */

/**
 * Service to get recipe related data
 */
class RecipeService extends RecipeShelfService {
  constructor() {
    super("recipe");
  }

  /**
   * Returns recipe summaries
   * @return {Summary[]}
   */
  getRecipeSummaries = () => {
    return this.findSummaries({});
  };

  /**
   * Returns a recipe
   * @param {Summary} summary
   * @return {Recipe}
   */
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
