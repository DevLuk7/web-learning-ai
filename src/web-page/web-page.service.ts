import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WebPage } from './entities/web-page.entity';
import { Model } from 'mongoose';
import { CreateWebPageDto } from './dto/create-web-page.dto/create-web-page.dto';
import { UpdateWebPageDto } from './dto/update-web-page.dto/update-web-page.dto';
import { AnthropicAiService } from 'src/common/anthropic-ai.service';

@Injectable()
export class WebPageService {
  constructor(
    @InjectModel(WebPage.name) private readonly webPageModel: Model<WebPage>,
    private readonly anthropicAiService: AnthropicAiService,
  ) {}

  findAll() {
    return this.webPageModel.find().exec();
  }

  async findOne(id: string) {
    const webPage = await this.webPageModel.findOne({ _id: id }).exec();
    if (!webPage) {
      throw new NotFoundException(`Web page #${id} not found`);
    }
    return webPage;
  }

  async create(createWebPageDto: CreateWebPageDto) {
    const message = await this.anthropicAiService.getMessage(
      `Make short description for webpage: ${createWebPageDto.url}`,
    );
    const webPage = new this.webPageModel({
      ...createWebPageDto,
      description: (message.content[0] as any).text,
    });
    return webPage.save();
  }

  async update(id: string, updateWebPageDto: UpdateWebPageDto) {
    const existingWebPage = await this.webPageModel
      .findOneAndUpdate({ _id: id }, { $set: updateWebPageDto }, { new: true })
      .exec();

    if (!existingWebPage) {
      throw new NotFoundException(`Web page #${id} not found`);
    }
    return existingWebPage;
  }

  async remove(id: string) {
    const webPage = await this.findOne(id);
    return webPage.deleteOne();
  }
}
