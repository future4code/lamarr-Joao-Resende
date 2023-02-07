### Exercício 1

a) 
```
ALTER TABLE Auth_users ADD COLUMN role ENUM("ADMIN", "NORMAL") DEFAULT "NORMAL" 
```

b)
```
import * as jwt from 'jsonwebtoken'

export interface AuthenticationData {
   id: string,
   role: string
}

export class TokenGenerator {

    public generateToken = (input: AuthenticationData) => {
        const token = jwt.sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: "1h"
            }
        )
        return token
    }

    public tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        const result = {
            id: payload.id,
            role: payload.role
        }

        return result
    }
}
```
c)
```
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password, role } = input;

      if (!name || !nickname || !email || !password || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email", "password" e "role"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId()

      const hashPassword: string = await hashManager.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
        role: role.toUpperCase()
      };

      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken({ id: user.id, role: user.role })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
```

d)
```
  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos"email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound()
      }

      const compareResult: boolean = await hashManager.compareHash(password, user.password)

      if (!compareResult) {
        throw new InvalidPassword()
      }

      const token = tokenGenerator.generateToken({ id: user.id, role: user.role })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
```

### Exercício 2

```
  public getUserById = async (token: string) => {
    try {
      const userDatabase = new UserDatabase()

      const tokenGenerator = new TokenGenerator()
      const authenticationData = tokenGenerator.tokenData(token)

      if (authenticationData.role !== UserRole.NORMAL) {
        throw new Unauthorized()
      }

      const user = await userDatabase.getUserById(authenticationData.id);
      return user
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
```

