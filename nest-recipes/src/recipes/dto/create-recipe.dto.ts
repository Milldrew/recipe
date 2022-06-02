import { IsNumber, IsString } from 'class-validator';
export class CreateRecipeDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  ingredients: string;
  @IsString()
  tags?: string;
  @IsString()
  imageUrl: string;
  @IsNumber()
  cookingTime?: number;
  @IsNumber()
  prepTime?: number;
  @IsNumber()
  yield: number;
  @IsString()
  steps?: string;
  @IsNumber()
  rating: number;
}
