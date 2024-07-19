import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WebPageService } from './web-page.service';
import { CreateWebPageDto } from './dto/create-web-page.dto/create-web-page.dto';
import { UpdateWebPageDto } from './dto/update-web-page.dto/update-web-page.dto';

@Controller('web-page')
export class WebPageController {
  constructor(private readonly webPageService: WebPageService) {}

  @Get()
  findAll() {
    return this.webPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webPageService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateWebPageDto) {
    return this.webPageService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateWebPageDto) {
    return this.webPageService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webPageService.remove(id);
  }
}
