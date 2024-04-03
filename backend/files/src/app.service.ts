import { Injectable } from '@nestjs/common';
import { CreateMovieRequest, CreateMovieResponse } from './movies.pb';

@Injectable()
export class MoviesService {
  async createMovie(
    request: CreateMovieRequest,
  ): Promise<CreateMovieResponse | string> {
    try {
      const { movie } = request;
      console.log(movie);
      return 'Ok';
    } catch (error) {
      return { error };
    }
  }
}
