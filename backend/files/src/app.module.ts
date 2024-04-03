import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MoviesService],
})
export class AppModule {}
