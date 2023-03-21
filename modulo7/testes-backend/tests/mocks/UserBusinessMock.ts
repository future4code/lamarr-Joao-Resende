import { UserRepository } from "../../src/business/UserRepository";
import { User } from "../../src/model/User";
import { userMock } from "./UserMock"

export class UserBusinessMock implements UserRepository {
  public async getUserById(id: string): Promise<User | undefined> {
    return id === "id_mock_admin" ? userMock : undefined
  }

}