
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { TypeOrmProductRepository } from '../repositories/typeorm-product.repository';
import { DataSource } from 'typeorm';
import { ProductOrmEntity } from '../persistence/typeorm/product.orm-entity';
import { CreateProductUseCase } from 'src/aplication/uses-cases/creare-product.usecase';

@Controller('products')
export class ProductController {
  private productRepo: ProductRepository;
  private createProductUseCase: CreateProductUseCase;

  constructor(private dataSource: DataSource) {
    this.productRepo = new TypeOrmProductRepository(
      this.dataSource.getRepository(ProductOrmEntity),
    );
    this.createProductUseCase = new CreateProductUseCase(this.productRepo);
  }

  @Post()
  async create(@Body() body: any) {
    const product = await this.createProductUseCase.execute(body);
    return product.toPrimitives();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productRepo.findById(id);
    if (!product) return null;
    return product.toPrimitives();
  }
}
