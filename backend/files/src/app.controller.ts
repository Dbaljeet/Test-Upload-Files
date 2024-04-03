import {
  Body,
  Controller,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MoviesService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
import { MOVIES_SERVICE_NAME } from './movies.pb';
import { CreateMoviesDto } from './dto/crate-movies.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
@Controller('movies')
export class AppController {
  constructor(private readonly appService: MoviesService) {}

  @GrpcMethod(MOVIES_SERVICE_NAME, 'createMovie')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  async createComment(@Body() body: { movie: CreateMoviesDto }) {
    return await this.appService.createMovie(body);
  }
}
