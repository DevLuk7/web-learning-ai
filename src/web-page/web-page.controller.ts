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
import { Roles } from 'src/iam/authorization/decorators/roles.decorator';
import { Role } from 'src/users/enums/role.enum';
import { Policies } from 'src/iam/authorization/decorators/policies.decorator';
import { FrameworkContributorPolicy } from 'src/iam/authorization/policies/framework-contributor.policy';
import { Auth } from 'src/iam/authentication/decorators/auth.decorator';
import { AuthType } from 'src/iam/authentication/enums/auth-type.enum';

@Policies(new FrameworkContributorPolicy())
@Auth(AuthType.Bearer, AuthType.ApiKey)
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

  @Roles(Role.Admin)
  @Post()
  create(@Body() body: CreateWebPageDto) {
    return this.webPageService.create(body);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateWebPageDto) {
    return this.webPageService.update(id, body);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webPageService.remove(id);
  }
}
