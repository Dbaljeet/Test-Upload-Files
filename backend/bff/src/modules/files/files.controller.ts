import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  callback(null, `${name}+${Date.now()}.pdf`);
};

export const pdfFileFilter = (req, file, callback) => {
  // if (!file.originalname.match(/\.(pdf|word)$/)) {
  if (!file.originalname.match(/\.(pdf)$/)) {
    return callback(new Error('Only pdf files are allowed!'), false);
  }
  callback(null, true);
};

@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({ destination: 'uploads', filename: editFileName }),
      fileFilter: pdfFileFilter,
    }),
  ) //name key file
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          //__comment const oneKb = 1000__
          new MaxFileSizeValidator({ maxSize: 9000000 }),
          new FileTypeValidator({ fileType: 'application/pdf' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    if (!file) throw new Error('No file');
    console.log('file', file);
    return 'suc';
  }
}
