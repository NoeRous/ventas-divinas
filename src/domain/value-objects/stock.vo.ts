export class StockQuantity{

    constructor(
        private quantity:number
    ){
        if(quantity < 0) throw new Error('La cantidad no puede ser negativa');
    }

    getValue():number{
        return this.quantity;
    }

    increase(amount:number):StockQuantity{
        if(amount <= 0) throw new Error('La cantidad debe ser positiva');
        return new StockQuantity(this.quantity + amount);
    }

    decrease(amount:number):StockQuantity{
        if(amount<= 0) throw new Error('La cantidad debe ser positiva');
        if(this.quantity < amount) throw new Error('No hay suficiente stock disponible');
        return new StockQuantity(this.quantity - amount);
    }

}