import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ErrorResponse } from '../dto/error-response';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(ErrorFilter.name);
  catch(error: Error, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const status =
      error instanceof HttpException
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // if (status === HttpStatus.UNAUTHORIZED)
    //   return response.status(status).render('views/401');
    // if (status === HttpStatus.NOT_FOUND)
    //   return response.status(status).render('views/404');
    this.logger.error(error);
    console.error(error);

    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      return response.status(status).json({
        error: {
          message: error.message,
          stack: error.stack,
        },
      } as ErrorResponse);
    }
  }
}
