import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductInterface } from '../product.interface';

@Injectable()
export class CreateProductService {
  constructor(private productRepository: ProductRepository) {}
  execute(product: ProductInterface): void {
    this.productRepository.create(product);
  }
}
