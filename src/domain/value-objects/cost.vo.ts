export class Cost{
    constructor(
        private readonly value: number
    ){
        if(value<0) throw new Error('El costo no puede ser negativo');
    }

    getValue(): number{
        return this.value;
    }

    update(value:number):Cost{
        return new Cost(value);

    }
}