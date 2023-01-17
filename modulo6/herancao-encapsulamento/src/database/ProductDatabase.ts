import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Labe_Products";

    public static async getAllProducts() {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return result;
    }

    public static async createProduct(id: string, name: string, price: number) {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert({
                id,
                name,
                price
            })
    }

    public static async getProductById(id: string) {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()
            .where({ id })

        return result;
    }
}