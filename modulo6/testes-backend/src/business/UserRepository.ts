import { User } from "../model/User";

export interface UserRepository {
  getUserById(id: string): Promise<User | undefined>
}
