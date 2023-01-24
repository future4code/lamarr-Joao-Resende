import { CustomError } from "../error/CustomError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(user: User): Promise<void> {
    try {
      await UserDatabase.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  select = async (): Promise<User[]> => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select()

      return result;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  };
}
