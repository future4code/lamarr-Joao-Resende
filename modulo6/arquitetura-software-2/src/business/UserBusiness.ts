import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../types/User"

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  get = async () => {
    try {
      const userDatabase = new UserDatabase();
      const users: User[] = await userDatabase.select()

      return users;
    } catch (error: any) {
      throw new Error(error.message)
    }

  };

}
