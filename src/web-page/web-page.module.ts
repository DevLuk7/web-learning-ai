import { Module } from '@nestjs/common';
import { WebPageController } from './web-page.controller';
import { WebPageService } from './web-page.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WebPage, WebPageSchema } from './entities/web-page.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WebPage.name, schema: WebPageSchema }]),
  ],
  controllers: [WebPageController],
  providers: [WebPageService],
})
export class WebPageModule {}
