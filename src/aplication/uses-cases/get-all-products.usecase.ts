import { Inject, Injectable } from '@nestjs/common';
import type { ProductRepository } from '../../domain/repositories/product.repository';

import { Product } from '../../domain/entities/product.entity';


@Injectable()
export class GetAllProductsUseCase {
  constructor(
    @Inject('ProductRepository')      
    private readonly productRepo: ProductRepository) {}

  async execute(): Promise<Product[]> {

    const products = await this.productRepo.findAll();
    return products;
  }
}
