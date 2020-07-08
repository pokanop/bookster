import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'server/guards/roles.guard';

@Controller('books')
@UseGuards(RolesGuard)
export class BooksController {
  @Get()
  getAll() {
    return { status: 'hello world' };
  }
}
