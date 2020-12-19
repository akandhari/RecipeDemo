import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Hazelnut Cake', 'Its yummy', 'https://cdn.momsdish.com/wp-content/uploads/2018/09/IMG_5564-scaled.jpg');

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
