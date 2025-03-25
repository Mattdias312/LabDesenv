import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './services/product.service';
import { GetProductByIdService } from './services/get-product-byid.service';
import { ProductRepository } from './product.repository';
import { CreateProductService } from './services/create-product.service';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    GetProductByIdService,
    ProductRepository,
    CreateProductService,
  ],
})
export class ProductsModule {}
