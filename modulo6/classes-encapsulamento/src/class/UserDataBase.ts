import { User } from './User';
import { Knex } from "knex";
import { TABLE_USERS } from '../database/tableNames';

export class UserDataBase {
    constructor(private connection: Knex) {
        this.connection = connection;
    }

    public insertUser = async (newUser: User) => {
        await this.connection(TABLE_USERS).insert(newUser);
    }
    public selectUsers = async () => {
        const result = await this.connection(TABLE_USERS).select();
        return result;
    }
}