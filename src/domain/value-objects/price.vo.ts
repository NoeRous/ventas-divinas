export class Price{
    constructor(
        private readonly value:number){
            if(value < 0) throw new Error('El precio no puede ser negativo');
    }

    getvalue():number{
        return this.value;
    }

    update(value:number):Price{
        return new Price(value);
    }
}