import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../model/User"
import { UserInputDTO } from "../model/userDTO"
import { CustomError } from "../error/CustomError"
import { InvalidEmail, InvalidPassword } from "../error/UserErrors"

export class UserBusiness {
  async create(input: UserInputDTO): Promise<void> {
    try {
      const { name, email, password } = input

      if (!email || !name || !password) {
        throw new CustomError(422, "Preencha os campos name, email e password.")
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      if (password.length <= 6) {
        throw new InvalidPassword()
      }

      const id = generateId()

      const userDatabase = new UserDatabase()

      const user = new User(
        id,
        name,
        email,
        password
      )

      await userDatabase.create(user)

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  get = async () => {
    try {
      const userDatabase = new UserDatabase();
      const users: User[] = await userDatabase.select()

      return users;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }

  };

}
