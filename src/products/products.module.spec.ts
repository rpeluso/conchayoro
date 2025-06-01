import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ProductsModule } from './products.module';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const databaseConnection: SequelizeModuleOptions = {
 dialect: 'sqlite',
 omitNull: true,
 autoLoadModels: true,
 synchronize: true,
};
const createProductDto: CreateProductDto = {
 name: 'Product1',
 price: 10,
 category: 'C1',
 rating: 1,
};
const updateProductDto: UpdateProductDto = {
 name: 'Product1-updated',
 price: 11,
 category: 'C2',
 rating: 2,
};
describe('ProductsModule', () => {
 let app: INestApplication;
 beforeEach(async () => {
 const moduleFixture: TestingModule = await Test.createTestingModule({
 imports: [SequelizeModule.forRoot(databaseConnection), ProductsModule],
 }).compile();
 app = moduleFixture.createNestApplication();
 await app.init();
 });
 afterAll(async () => {
 await app.close();
 });
});
