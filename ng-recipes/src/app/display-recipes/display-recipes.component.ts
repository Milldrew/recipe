import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-display-recipes',
  templateUrl: './display-recipes.component.html',
  styleUrls: ['./display-recipes.component.scss'],
})
export class DisplayRecipesComponent implements OnInit {
  constructor(private readonly recipes: RecipesService) {}

  ngOnInit(): void {}
}
