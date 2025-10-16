import { Inject, Injectable } from '@nestjs/common';
import type { ProductRepository } from '../../domain/repositories/product.repository';

import { Product } from '../../domain/entities/product.entity';


@Injectable()
export class GetProductUseCase {
  constructor(
    @Inject('ProductRepository')      
    private readonly productRepo: ProductRepository) {}

  async execute(id:string): Promise<Product> {

    const product = await this.productRepo.findById(id);

    if(!product)
      throw new Error('No existe el producto con id: ' )

    return product;
  }
}
