import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../../models/recipe';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss'],
    animations: [routerTransition()]
})
export class RecipeComponent implements OnInit {

    recipes: Recipe[];
    recipe: Recipe;

    nameRecipe: string;
    descriptionRecipe: string;
    stepsRecipe: string;

    constructor(public recipeService: RecipeService) {
        this.recipe = {'id': '', 'name': '', 'description': '', 'preparation': ''};
        this.recipeService.getRecipes().subscribe((recipes) => {
            this.recipes = recipes.data;
            console.log(this.recipes);
        });
    }

    ngOnInit() {
    }

    addRecipe() {

        console.log(this.nameRecipe);
        console.log(this.descriptionRecipe);
        this.recipeService.addRecipes(this.nameRecipe, this.descriptionRecipe, this.stepsRecipe).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }
}
