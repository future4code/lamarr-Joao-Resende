import { Knex } from "knex";
import { Purchase } from "./Purchase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";

export class PurchaseDataBase {
    constructor(private connection: Knex) {
        this.connection = connection;
    }

    public insertPurchase = async (newPurchase: Purchase) => {
        await this.connection(TABLE_PURCHASES).insert(newPurchase);
    }
    public selectUserPurchases = async (id: string) => {
        const result = await this.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)

        return result[0];
    }

}