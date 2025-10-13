import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export class ProductOrmEntity{
        @PrimaryGeneratedColumn('uuid')
        id: string;

        @Column()
        name: string;

        @Column()
        description: string;

        @Column('decimal')
        price: number;

        @Column('decimal')
        cost: number;

        @Column('int')
        stock_quantity: number;

        @Column()
        category_id: string;

        @CreateDateColumn()
        created_at: Date;

        @UpdateDateColumn()
        updated_at: Date;
    
}