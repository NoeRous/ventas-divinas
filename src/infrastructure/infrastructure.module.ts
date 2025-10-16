import { Get, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductOrmEntity } from './persistence/typeorm/product.orm-entity';
import { TypeOrmProductRepository } from './repositories/typeorm-product.repository';
import { ProductController } from '../presentation/constrollers/product.controller';
import { CreateProductUseCase } from 'src/aplication/uses-cases/creare-product.usecase';
import { GetProductUseCase } from 'src/aplication/uses-cases/get-product.usecase';
import { GetAllProductsUseCase } from 'src/aplication/uses-cases/get-all-products.usecase';


@Module({
  imports: [TypeOrmModule.forFeature([ProductOrmEntity])],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,GetProductUseCase,GetAllProductsUseCase,
    { provide: 'ProductRepository', useClass: TypeOrmProductRepository },
  ],
})
export class InfrastructureModule {}
