import { Inject, Injectable } from '@nestjs/common';
import type { ProductRepository } from '../../domain/repositories/product.repository';

import { Product } from '../../domain/entities/product.entity';

interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  cost: number;
  stockQuantity: number;
  categoryId: string;
}

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')      
    private readonly productRepo: ProductRepository) {}

  async execute(dto: CreateProductDTO): Promise<Product> {
    const product = Product.create({
      id: crypto.randomUUID(),
      name: dto.name,
      description: dto.description,
      price: dto.price,
      cost: dto.cost,
      stockQuantity: dto.stockQuantity,
      categoryId: dto.categoryId,
    });

    await this.productRepo.save(product);
    return product;
  }
}
