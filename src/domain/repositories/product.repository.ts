import { Product } from "../entities/product.entity";

export interface ProductRepository{
    save(product:Product): Promise<Product|null>;
    findById(id:string):Promise<Product|null>;
    findAll():Promise<Product[]>;
}