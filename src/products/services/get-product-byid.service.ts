import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';

@Injectable()
export class GetProductByIdService {
  constructor(private productRepository: ProductRepository) {}
  execute(id: number): any {
    return this.productRepository.getById(id);
  }
}
