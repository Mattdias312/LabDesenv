import { Test, TestingModule } from '@nestjs/testing';
import { ListProductController } from './list-product.controller';

describe('ListProductController', () => {
  let controller: ListProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListProductController],
    }).compile();

    controller = module.get<ListProductController>(ListProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
