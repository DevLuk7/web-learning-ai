import { Test, TestingModule } from '@nestjs/testing';
import { WebPageController } from './web-page.controller';

describe('WebPageController', () => {
  let controller: WebPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebPageController],
    }).compile();

    controller = module.get<WebPageController>(WebPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
