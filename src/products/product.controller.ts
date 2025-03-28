import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService as ProductService } from './services/product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductInterface } from './product.interface';
import { CreateProductService } from './services/create-product.service';

@Controller('product')
export class ProductController {
  constructor(
    private ProductService: ProductService,
    private createProductService: CreateProductService,
    private getProductByIdService: GetProductByIdService,
  ) {}

  @Get()
  list(): any[] {
    const productList = this.ProductService.execute();

    return productList;
  }

  @Get(':id')
  getById(@Param('id') id: string): any {
    const product = this.getProductByIdService.execute(Number(id));

    return product;
  }

  @Post()
  create(@Body() product: ProductInterface) {
    this.createProductService.execute(product);
  }
}
