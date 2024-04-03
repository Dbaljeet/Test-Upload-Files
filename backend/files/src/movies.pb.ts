/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "movies";

export interface Error {
  code: number;
  message: string;
}

export interface Movie {
  name: string;
  image: string;
  trailer: string;
  description: string;
  restriction: string;
}

export interface Empty {
}

export interface CreateScheduleRequest {
  hour: string;
}

export interface CreateScheduleResponse {
  error?: Error | undefined;
}

export interface CreateMovieRequest {
  movie: Movie | undefined;
}

export interface CreateMovieResponse {
  error?: Error | undefined;
}

export interface GetMoviesRequest {
  limit: string;
  filterBy: string;
}

export interface GetMoviesResponse {
  movies: Movie[];
}

export const MOVIES_PACKAGE_NAME = "movies";

export interface MoviesServiceClient {
  createSchedule(request: CreateScheduleRequest): Observable<CreateScheduleResponse>;

  createMovie(request: CreateMovieRequest): Observable<CreateMovieResponse>;

  getMovies(request: GetMoviesRequest): Observable<GetMoviesResponse>;
}

export interface MoviesServiceController {
  createSchedule(
    request: CreateScheduleRequest,
  ): Promise<CreateScheduleResponse> | Observable<CreateScheduleResponse> | CreateScheduleResponse;

  createMovie(
    request: CreateMovieRequest,
  ): Promise<CreateMovieResponse> | Observable<CreateMovieResponse> | CreateMovieResponse;

  getMovies(request: GetMoviesRequest): Promise<GetMoviesResponse> | Observable<GetMoviesResponse> | GetMoviesResponse;
}

export function MoviesServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createSchedule", "createMovie", "getMovies"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MoviesService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MoviesService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MOVIES_SERVICE_NAME = "MoviesService";
