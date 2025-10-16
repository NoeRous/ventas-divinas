import { Cost } from "../value-objects/cost.vo";
import { ProductName } from "../value-objects/name.vo";
import { Price } from "../value-objects/price.vo";
import { StockQuantity } from "../value-objects/stock.vo";

export class Product{

    constructor(
         private readonly _id: string,
         private _name: ProductName,
         private _description:string,
         private _price:Price,
         private _cost: Cost,
         private _stockQuantity:StockQuantity,
         private _categoryId: string,
         private _createdAt:Date,
         private _updatedAt:Date
    ){ }

    get id():string {return this._id}
    get name(): ProductName { return this._name; }
    get description(): string { return this._description; }
    get price(): Price { return this._price; }
    get cost(): Cost { return this._cost; }
    get stockQuantity(): StockQuantity { return this._stockQuantity; }
    get categoryId(): string { return this._categoryId; }


    increaseStock(amount:number){
        this._stockQuantity = this._stockQuantity.increase(amount);
        this._updatedAt = new Date();
    }

    decreaseStock(amount:number){
        this._stockQuantity = this._stockQuantity.decrease(amount);
        this._updatedAt = new Date();
    }

    updatePrice(newPrice:number){
        this._price = this.price.update(newPrice);
        this._updatedAt = new Date();
    }

    updateDescription(description:string){
        this._description = description;
        this._updatedAt = new Date();
    }

    static create(props:{
        id:string,
        name:string,
        description:string,
        price:number,
        cost:number,
        stockQuantity:number,
        categoryId:string
    }):Product{
        return new Product(
            props.id,
            new ProductName(props.name),
            props.description,
            new Price(props.price),
            new Cost(props.cost),
            new StockQuantity(props.stockQuantity),
            props.categoryId,
            new Date(),
            new Date(),
        );
    }

    static fromPrimitives(data:any): Product{
        return new Product(
            data.id,
            data.name,
            data.description,
            data.price,
            data.cost,
            data.stock_quantity,
            data.category_id,
            new Date(data.created_at),
            new Date(data.updated_at)
        );
    }

    toPrimitives(){
        return {
            id: this._id,
            name: this._name.getValue(),
            description: this.description,
            price:this._price.getvalue(),
            cost: this.cost.getValue(),
            stock_quantity: this._stockQuantity.getValue(),
            category_id: this._categoryId,
            created_at: this._createdAt,
            updated_at: this._updatedAt
        }
    }

}