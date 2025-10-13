import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrmEntity } from '../persistence/typeorm/product.orm-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5436', 10),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '123456',
      database: process.env.DB_NAME || 'ventas_divina',
      entities: [ProductOrmEntity],
      synchronize: true, // Solo para desarrollo
      logging: true,      // Opcional, para ver queries
    }),
    TypeOrmModule.forFeature([ProductOrmEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
