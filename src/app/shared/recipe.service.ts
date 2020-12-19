import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('HazelNut Cake', 'Good', 'https://1.bp.blogspot.com/-hNB9id-xsq8/ToOpsfQuwwI/AAAAAAAAAMw/IAqpMkXNKiM/s1600/IMG_6642.JPG',400,new Date(),new Date('12/12/2021'),4.76789),
    new Recipe('Banana Cake', 'Good', 'https://www.mylittlelarder.com/wp-content/uploads/2016/08/banana-cake-5-683x1024.jpg',900,new Date(),new Date('12/12/2021'),4.765675)
  ];

  getRecipes() {
    return this.recipes;
  }
}
