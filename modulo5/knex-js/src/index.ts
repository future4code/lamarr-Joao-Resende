import express from "express"
import cors from "cors"
import connection from "./database/connection";

const app = express();

app.use(express.json());

app.use(cors());


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("001"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// EXERCÍCIO 1 

// b)

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

    return result[0][0];
}

(async () => {
    console.log(await getActorByName("Tony Ramos"))
})()

// c)

const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor 
    WHERE gender = '${gender}'
  `)

    return result[0][0].count;
}

(async () => {
    console.log(await countActorsByGender("male"))
})()

// EXERCICIO 2

// a) 

const updateSalary = async (salary: number, id: string): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary
        }).where({
            id: id
        })

    console.log("Salário atualizado com sucesso!")
}

updateSalary(500000, "002")

// b) 

const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where({
            id: id
        })

    console.log("Ator deletado com sucesso!")
}

deleteActor("007")

// c) 

const salaryAvgByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender: gender });

    return result[0].average;
}

(async () => {
    console.log(await salaryAvgByGender("male"))
})()

// EXERCICIO 3

// a)

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

// b)

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

// EXERCICIO 4

// a)

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

// b)

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

// ------------------------------------------------------------- //

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});