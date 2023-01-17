import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {
  insertUser = async (user: user): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  selectUsers = async (): Promise<user[]> => {
    try {
      const result = await UserDatabase.connection("User_Arq")
        .select()

      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  deleteUser = async (id: string): Promise<void> => {
    try {
      await UserDatabase.connection("User_Arq")
        .delete()
        .where({ id })
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
};

