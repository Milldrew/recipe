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
    title: 'string', // ok
    ingredients: 'string', // ok
    tags: 'string',
    imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', // ok
    cookingTime: 3, //ok
    prepTime: 1,
    yield: 1,
    steps: 'string',
    rating: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
