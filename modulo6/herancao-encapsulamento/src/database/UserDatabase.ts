import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labe_Users";

    public static async getAllUsers() {
        const result = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()

        return result;
    }

    public static async createUser(id: string, email: string, password: string) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert({
                id,
                email,
                password
            })
    }

    public static async getUserById(id: string) {
        const result = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id })

        return result;
    }

}