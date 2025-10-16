
import { Controller, Post, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProductUseCase } from 'src/aplication/uses-cases/creare-product.usecase';
import { GetProductUseCase } from 'src/aplication/uses-cases/get-product.usecase';
import { GetAllProductsUseCase } from 'src/aplication/uses-cases/get-all-products.usecase';

@Controller('products')
export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getProductUseCase: GetProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase

  ) { }

  @Get('all')
  async getProducts() {
    try {
      const products = await this.getAllProductsUseCase.execute();
      return products;
    } catch (error) {
      throw new HttpException({ status: 'Error', message: error.message || 'Hubo un error al obtener todos los producto' }, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async createProduct(@Body() body: any) {
    try {
      const product = await this.createProductUseCase.execute(body);
      return product.toPrimitives();
    } catch (error) {
      throw new HttpException({ status: 'Error', message: error.message || 'Hubo un error al crear un producto' }, HttpStatus.BAD_REQUEST);
    }

  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    try {
      const product = await this.getProductUseCase.execute(id);
      return product.toPrimitives();
    } catch (error) {
      throw new HttpException({ status: 'Error', message: error.message || 'Hubo un error al obtener un producto' }, HttpStatus.BAD_REQUEST);
    }
  }


}
