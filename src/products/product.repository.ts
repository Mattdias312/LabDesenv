import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';

@Injectable()
export class ProductRepository {
  private products: ProductInterface[] = [];
  create(product: ProductInterface): void {
    this.products.push(product);
  }
  update(id: number, product: ProductInterface): void {
    this.products = this.products.filter((p) => p.id !== id);
    this.products.push(product);
  }

  getById(id: number): ProductInterface {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw Error('Produto não encontrado');
    return product;
  }
  list() {
    return this.products;
  }
  delete() {}
}
