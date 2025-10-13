import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOrmEntity } from '../persistence/typeorm/product.orm-entity';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';

export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(ProductOrmEntity)
    private readonly repo: Repository<ProductOrmEntity>,
  ) {}

  async save(product: Product): Promise<Product | null> {
    try {
      const saved = await this.repo.save(product.toPrimitives());
      return Product.fromPrimitives(saved);
    } catch (error) {
      console.error('Error saving product:', error);
      return null;
    }
  }

  async findById(id: string): Promise<Product | null> {
    const record = await this.repo.findOne({ where: { id } });
    if (!record) return null;
    return Product.fromPrimitives(record);
  }

  async findAll(): Promise<Product[]> {
    const records = await this.repo.find();
    return records.map(Product.fromPrimitives);
  }
}
