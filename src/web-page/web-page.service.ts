import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WebPage } from './entities/web-page.entity';
import { Model } from 'mongoose';
import { CreateWebPageDto } from './dto/create-web-page.dto/create-web-page.dto';
import { UpdateWebPageDto } from './dto/update-web-page.dto/update-web-page.dto';

@Injectable()
export class WebPageService {
  constructor(
    @InjectModel(WebPage.name) private readonly webPageModel: Model<WebPage>,
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

  create(createWebPageDto: CreateWebPageDto) {
    const webPage = new this.webPageModel(createWebPageDto);
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
