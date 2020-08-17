import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    // Catch any unhandled error here if you want to return a custom response code
    // instead of 500 Internal server error
    super.catch(exception, host);
  }
}
