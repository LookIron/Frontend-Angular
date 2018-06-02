import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Recipe} from '../../models/recipe';
import {RecipeService} from '../../services/recipe.service';

@Component({
    selector: 'app-searchrecipes',
    templateUrl: './searchRecipe.component.html',
    styleUrls: ['./searchRecipe.component.scss'],
    animations: [routerTransition()]
})
export class SearchRecipeComponent implements OnInit {
    recipes: Recipe[];
    recipe: Recipe;
    constructor(public recipeService: RecipeService) {
        this.recipe = {'id': '', 'name': '', 'description': '', 'steps': ''};
        this.recipeService.getRecipes().subscribe((recipes) => {
            this.recipes = recipes.data;
            console.log(this.recipes);
        });
    }

    ngOnInit() {}
}
