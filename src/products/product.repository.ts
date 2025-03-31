import { Injectable } from '@nestjs/common';
import { ProductInterface } from './product.interface';

@Injectable()
export class ProductRepository {
  private products: ProductInterface[] = [];
  create(product: ProductInterface): void {
    this.products.push(product);
  }
  update(id: number, product: ProductInterface): void {
    this.list();
    this.products.splice(id - 1, 1, product);
    // this.products = this.products.filter((p) => p.id !== id);
    // this.products.push(product);
  }

  getById(id: number): ProductInterface {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw Error('Produto não encontrado');
    return product;
  }
  list() {
    this.products = this.products.sort((a, b) => a.id - b.id);
    return this.products;
  }
  delete(id: number): void {
    this.list();
    this.products.splice(id - 1, 1);
  }
}
