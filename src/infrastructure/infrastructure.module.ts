import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductOrmEntity } from './persistence/typeorm/product.orm-entity';
import { TypeOrmProductRepository } from './repositories/typeorm-product.repository';
import { ProductController } from './constrollers/product.controller';
import { CreateProductUseCase } from 'src/aplication/uses-cases/creare-product.usecase';


@Module({
  imports: [TypeOrmModule.forFeature([ProductOrmEntity])],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    { provide: 'ProductRepository', useClass: TypeOrmProductRepository },
  ],
})
export class InfrastructureModule {}
