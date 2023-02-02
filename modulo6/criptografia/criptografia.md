### Exercício 1

a) 

- O 'round' ou 'cost' é um fator que está relacionado à segurança da senha. Quanto maior o valor, mais seguro é a senha. Usamos um cost de 12, por ser o padrão na
maioria das libs.

- O 'salt' é uma string aleatória que é adicionada antes de criar o hash. Dessa forma ela evita os ataques chamados rainbow table.

b-c)

```
import * as bcrypt from "bcryptjs";


 const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }
```

### Exercício 2

a) Devemos modificar o cadastro primeiro, pois assim a senha criptografada fica salva no banco de dados e não o plain text.

b)

```
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    };
  
    const id = generate();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword);

    const token = generateToken({
      id
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

c)

```
app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const comapreResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id    
		});

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

d) Não devemos modificar o endpoint pois não utilizamos a senha hora nenhuma (a resposta da requisição é apenas o id e o email.)

