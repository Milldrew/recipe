import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { RecipeCardComponent } from './display-cards/recipe-card/recipe-card.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [AppComponent, DisplayCardsComponent, RecipeCardComponent, HeroComponent],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
