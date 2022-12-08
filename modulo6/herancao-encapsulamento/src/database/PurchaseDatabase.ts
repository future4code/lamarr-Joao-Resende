import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";
import { UserDatabase } from "./UserDatabase";

export class PurchaseDatabase extends BaseDatabase {
    public static TABLE_PURCHASES = "Labe_Purchases";

    public static async getUserPurchases(id: string) {
        const result = await BaseDatabase
            .connection.raw(`
            SELECT
                ${UserDatabase.TABLE_USERS}.email,
                ${ProductDatabase.TABLE_PRODUCTS}.name AS product_name,
                ${ProductDatabase.TABLE_PRODUCTS}.price AS product_price,
                ${PurchaseDatabase.TABLE_PURCHASES}.quantity AS product_quantity,
                ${PurchaseDatabase.TABLE_PURCHASES}.total_price
            FROM ${PurchaseDatabase.TABLE_PURCHASES}
            JOIN ${UserDatabase.TABLE_USERS}
            ON ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${UserDatabase.TABLE_USERS}.id
            JOIN ${ProductDatabase.TABLE_PRODUCTS}
            ON ${PurchaseDatabase.TABLE_PURCHASES}.product_id = ${ProductDatabase.TABLE_PRODUCTS}.id
            WHERE ${PurchaseDatabase.TABLE_PURCHASES}.user_id = ${id};
            `)

        return result[0];
    }

    public static async createPurchase(id: string, user_id: string, product_id: string, quantity: number, total_price: number) {
        await BaseDatabase
            .connection(PurchaseDatabase.TABLE_PURCHASES)
            .insert({
                id,
                user_id,
                product_id,
                quantity,
                total_price
            })
    }


}