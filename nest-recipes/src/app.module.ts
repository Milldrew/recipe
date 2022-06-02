import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import connection from './typeorm-config';

@Module({
  imports: [RecipesModule, TypeOrmModule.forRoot(connection)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
