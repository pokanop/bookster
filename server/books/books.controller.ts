import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'server/guards/roles.guard';
import { JwtAuthGuard } from 'server/guards/jwt-auth.guard';

@Controller('books')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BooksController {
  @Get()
  getAll() {
    return { status: 'hello world' };
  }
}
