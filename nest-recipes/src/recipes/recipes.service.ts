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
    console.log('finda All hit');
    return this.recipeRepo.find();
  }

  async findOne(id: number) {
    const recipe = await this.recipeRepo.findOneBy({ id });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.recipeRepo.preload({ id, ...updateRecipeDto });
    if (!recipe) {
      throw new NotFoundException(`Recipe #${id} not found`);
    }
    return this.recipeRepo.save(recipe);
  }

  async remove(id: number) {
    const recipe = await this.recipeRepo.findOneBy({ id });
    return this.recipeRepo.remove(recipe);
  }
}
