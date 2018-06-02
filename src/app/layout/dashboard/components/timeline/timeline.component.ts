import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../../models/recipe';
import {RecipeService} from '../../../../services/recipe.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    recipes: Recipe[];
    recipe: Recipe;
  constructor(public recipeService: RecipeService) {
      this.recipe = {'id': '', 'name': '', 'description': '', 'steps': ''};
      this.recipeService.getRecipes().subscribe((recipes) => {
          this.recipes = recipes.data;
          console.log(this.recipes);
      });
  }

  ngOnInit() {
  }

}
