/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "";

export interface FileUploadRequest {
  fileContent: Uint8Array;
  fileName: string;
}

export interface Error {
  code: number;
  message: string;
}

export interface FileUploadResponse {
  message?: string | undefined;
  error?: Error | undefined;
}

export const _PACKAGE_NAME = "";

export interface FileServiceClient {
  uploadFile(request: FileUploadRequest): Observable<FileUploadResponse>;
}

export interface FileServiceController {
  uploadFile(
    request: FileUploadRequest,
  ): Promise<FileUploadResponse> | Observable<FileUploadResponse> | FileUploadResponse;
}

export function FileServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["uploadFile"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("FileService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("FileService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const FILE_SERVICE_NAME = "FileService";
