import { Test, TestingModule } from '@nestjs/testing';
import { GetProductByIdService } from './get-product-byid.service';

describe('GetProductByidService', () => {
  let service: GetProductByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProductByIdService],
    }).compile();

    service = module.get<GetProductByIdService>(GetProductByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
