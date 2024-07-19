import { IsUrl } from 'class-validator';

export class CreateWebPageDto {
  @IsUrl()
  url: string;
}
