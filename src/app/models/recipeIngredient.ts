export class RecipeIngredient{
    recipe_id: string;
    ingredient_id: string;

    constructor(recipe_id: string, ingredient_id: string){
        this.recipe_id = recipe_id;
        this.ingredient_id = ingredient_id;
     }

}
