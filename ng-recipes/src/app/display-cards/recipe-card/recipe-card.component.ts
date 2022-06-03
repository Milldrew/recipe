import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  recipe: Recipe = {
    id: 1,
    title: 'Hot wings', // ok
    ingredients: 'Chicken Wings, Cayene Peper, Hot Sauce(ex Tabisco), Butter.', // ok
    tags: 'meat spicy chicken gluten-free',
    imageUrl:
      'https://www.denverpost.com/wp-content/uploads/2017/07/kaya-websize-53.jpg', // ok
    cookingTime: 3, //ok
    prepTime: 1,
    yield: 1,
    steps: 'string',
    rating: 1,
  };

  tags: string[] | undefined = this.recipe.tags
    ? this.recipe.tags.split(' ')
    : undefined;

  constructor() {}

  ngOnInit(): void {}
}
