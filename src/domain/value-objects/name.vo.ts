export class ProductName{
    constructor(private readonly value:string){
        if(!value || value.trim() === '') throw new Error('El nombre es obligatorio');
    }

    getValue():string{
        return this.value;
    }
}