import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error(
          'Preencha os campos "name", "email" e "password"'
        );
      }

      if (password.length < 6) {
        throw new Error("Senha muito curta");
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message)
    }
  };

  getUsers = async () => {
    try {
      const userDatabase = new UserDatabase();
      const users: user[] = await userDatabase.selectUsers()

      return users;
    } catch (error: any) {
      throw new Error(error.message)
    }

  };

  deleteUser = async (id: string) => {
    try {
      const userDatabase = new UserDatabase();

      const users: user[] = await userDatabase.selectUsers()

      const findUser = users.find(user => {
        return user.id === id
      })

      if (findUser) {
        await userDatabase.deleteUser(id)
      } else {
        throw new Error("Não existe um usuário com este id.")
      }

    } catch (error: any) {
      throw new Error(error.message)
    }
  };
}
