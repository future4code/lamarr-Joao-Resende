import { Knex } from "knex";
import { Product } from "./Product";
import { TABLE_PRODUCTS } from "../database/tableNames";

export class ProductDataBase {
    constructor(private connection: Knex) {
        this.connection = connection;
    }

    public insertProduct = async (newProduct: Product) => {
        await this.connection(TABLE_PRODUCTS).insert(newProduct);
    }
    public selectProducts = async () => {
        const result = await this.connection(TABLE_PRODUCTS).select();
        return result;
    }

}