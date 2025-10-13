
import { ProductRepository } from '../../../src/domain/repositories/product.repository';
import { Product } from '../../../src/domain/entities/product.entity';
import { CreateProductUseCase } from 'src/aplication/uses-cases/creare-product.usecase';

describe('CreateProductUseCase', () => {
  let useCase: CreateProductUseCase;
  let repo: ProductRepository;

  beforeEach(() => {
    repo = {
      save: jest.fn(async (product: Product) => product),
      findById: jest.fn(),
      findAll: jest.fn(),
    };

    useCase = new CreateProductUseCase(repo);
  });

  it('should create a product', async () => {
    const dto = {
      name: 'Producto Test',
      description: 'Descripción',
      price: 100,
      cost: 50,
      stockQuantity: 10,
      categoryId: 'cat-001',
    };

    const product = await useCase.execute(dto);

    expect(product).toBeInstanceOf(Product);
    expect(product.name).toBe(dto.name);
  });
});
