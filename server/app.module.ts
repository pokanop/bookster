import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { BooksController } from './books/books.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import serverConfig from './config/server.config';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/bookster/browser'),
    }),
    ConfigModule.forRoot({
      load: [serverConfig],
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [BooksController],
})
export class AppModule {}
