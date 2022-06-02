import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  ingredients: string;
  @Column()
  tags?: string;
  @Column()
  imageUrl: string;
  @Column()
  cookingTime?: number;
  @Column()
  prepTime?: number;
  @Column()
  yield: number;
  @Column()
  steps?: string;
  @Column()
  rating: number;
}
