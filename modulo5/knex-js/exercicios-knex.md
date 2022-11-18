### Exercício 1

a) A resposta é um array com as informações que procuramos na posição 0. 

b) 

```
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

    return result[0][0]
}
```

c) 

```
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor 
    WHERE gender = '${gender}'
  `)

    return result[0][0].count;
}
```

### Exercício 2

a) 

```
const updateSalary = async (salary: number, id: string): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary
        }).where({
            id: id
        })

    console.log("Salário atualizado com sucesso!")
}
```

b)

```
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where({
            id: id
        })

    console.log("Ator deletado com sucesso!")
}
```

c)

```
const salaryAvgByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender: gender });

    return result[0].average;
}
```

### EXERCICIO 3

a)

```
app.get("/actor/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});
```

b)

```
app.get("/actor", async (req, res) => {
    try {
        const gender = req.query.gender as string;
        const actorQty = await countActorsByGender(gender);

        res.status(200).send({
            quantity: actorQty
        })
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});
```

### EXERCICIO 4

a) 

```
app.put("/actor", async (req, res) => {
    try {
        await updateSalary(
            req.body.salary,
            req.body.id
        )
        res.status(200).send("Salário atualizado com sucesso!")
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
})
```

b) 

```
app.delete("/actor/:id", async (req, res) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send("Ator deletado com sucesso!")
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
})
```
