import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'server/guards/roles.guard';
import { AuthGuard } from 'server/guards/auth.guard';

@Controller('books')
@UseGuards(RolesGuard)
export class BooksController {
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return { status: 'hello world' };
  }
}
