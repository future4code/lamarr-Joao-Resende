import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  select = async (): Promise<User[]> => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()

      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
