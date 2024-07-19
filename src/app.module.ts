import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WebPageModule } from './web-page/web-page.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/web-learning-ai'),
    WebPageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
