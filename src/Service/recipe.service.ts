import RecipeShelfService from "./recipeshelf.service";
import { Summary } from "../Model/summary";
import Recipe from "../Model/recipe";

export default class RecipeService extends RecipeShelfService {
    constructor() {
        super('recipe')
    }

    getRecipeSummaries(): Promise<Summary[]> {
        return this.findSummaries({})
    }

    getRecipe(summary: Summary): Promise<Recipe> {
        return this.findItem<Recipe>(summary);
    }
}
