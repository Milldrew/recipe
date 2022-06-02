import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe) private readonly recipeRepo: Repository<Recipe>,
  ) {}
  create(createRecipeDto: CreateRecipeDto) {
    const recipe = this.recipeRepo.create(createRecipeDto);
    return this.recipeRepo.save(recipe);
  }

  findAll() {
    return this.recipeRepo.find();
  }

  async findOne(id: number) {
    const recipe = await this.recipeRepo.findOneBy({ id });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return recipe;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipe = this.recipeRepo.preload(updateRecipeDto);
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return recipe;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
