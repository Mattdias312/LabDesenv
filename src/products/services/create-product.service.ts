import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { ProductInterface } from '../product.interface';

@Injectable()
export class CreateProductService {
  constructor(private productRepository: ProductRepository) {}
  execute(product: ProductInterface): void {
    this.productRepository.create(product);
  }

  update(id: number, product: ProductInterface): void {
    this.productRepository.update(id, product);
  }

  delete(id: number): void {
    this.productRepository.delete(id);
  }
}
