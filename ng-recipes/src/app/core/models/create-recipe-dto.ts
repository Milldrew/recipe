export interface CreateRecipeDto {
  title: string;
  ingredients: string;
  tags?: string;
  imageUrl: string;
  cookingTime?: number;
  prepTime?: number;
  yield: number;
  steps?: string;
  rating: number;
}
