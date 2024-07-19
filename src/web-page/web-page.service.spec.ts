import { Test, TestingModule } from '@nestjs/testing';
import { WebPageService } from './web-page.service';

describe('WebPageService', () => {
  let service: WebPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebPageService],
    }).compile();

    service = module.get<WebPageService>(WebPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
