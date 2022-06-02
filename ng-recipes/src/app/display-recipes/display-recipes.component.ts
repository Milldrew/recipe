import { Component, OnInit } from '@angular/core';
import { Recipe } from '../core/models/recipe';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-display-recipes',
  templateUrl: './display-recipes.component.html',
  styleUrls: ['./display-recipes.component.scss'],
})
export class DisplayRecipesComponent implements OnInit {
  allRecipes: Recipe[] | [] = [];
  constructor(private readonly recipes: RecipesService) {
    this.recipes
      .getRecipes()
      .subscribe(
        (recipesPayload) => (this.allRecipes = recipesPayload),
        console.error,
        console.log
      );
  }

  ngOnInit(): void {}
}
