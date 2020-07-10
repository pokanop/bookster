import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { BooksController } from './books/books.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/bookster/browser'),
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [BooksController],
})
export class AppModule {}
