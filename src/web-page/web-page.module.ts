import { Module } from '@nestjs/common';
import { WebPageController } from './web-page.controller';
import { WebPageService } from './web-page.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WebPage, WebPageSchema } from './entities/web-page.entity';
import { AnthropicAiService } from 'src/common/anthropic-ai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WebPage.name, schema: WebPageSchema }]),
    ConfigModule,
  ],
  controllers: [WebPageController],
  providers: [WebPageService, AnthropicAiService],
})
export class WebPageModule {}
