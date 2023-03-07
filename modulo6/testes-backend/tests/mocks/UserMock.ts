import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "id",
    "Mockinho, o seu testinho",
    "email",
    "123456",
    USER_ROLES.NORMAL
)