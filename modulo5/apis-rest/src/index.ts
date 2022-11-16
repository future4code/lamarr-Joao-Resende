import express from "express";
import cors from "cors";
import { users } from './data';
import * as type from './types';

const app = express();

app.use(express.json());

app.use(cors());

// GET USERS

app.get("/users", (req, res) => {

    let errorCode = 400
    const userType = req.query.type as string
    const userName = req.query.name as string

    try {

        let userSearched: type.User[]

        if (userType && userName) {
            userSearched = users.filter((user) => {
                return user.type === userType.toUpperCase() && user.name.toLowerCase() === userName.toLowerCase()
            })

            if (userSearched.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado");
            }
            res.status(200).send(userSearched)
        }

        if (userType) {
            userSearched = users.filter((user) => {
                return user.type === userType.toUpperCase()
            })

            if (userSearched.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado");
            }
            res.status(200).send(userSearched)
        }

        if (userName) {
            userSearched = users.filter((user) => {
                return user.name.toLowerCase() === userName.toLowerCase()
            })

            if (userSearched.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado");
            }
            res.status(200).send(userSearched)
        }

        if (!userName && !userType) {
            const showUsers = users.map(user => {
                return user
            })
            res.status(200).send(showUsers)
        }
    } catch (e: any) {
        res.status(errorCode).send(e.message)
    }


})

// CREATE USER

app.post("/users", (req, res) => {

    let errorCode = 400
    const userName = req.body.name
    const userType = req.body.type
    const userEmail = req.body.email
    const userAge = req.body.age

    try {
        if (!userName && !userType && !userEmail && !userAge) {
            errorCode = 422
            throw new Error("O nome, tipo, email e idade do usuário não foram informados!");
        }
        if (!userName) {
            errorCode = 422
            throw new Error("O nome do usuário não foi informado!");
        }
        if (!userType) {
            errorCode = 422
            throw new Error("O tipo do usuário não foi informado!");
        }
        if (!userEmail) {
            errorCode = 422
            throw new Error("O email do usuário não foi informado!");
        }
        if (!userAge) {
            errorCode = 422
            throw new Error("A idade do usuário não foi informada!");
        }
        if (typeof userName !== "string") {
            errorCode = 422
            throw new Error("O nome do usuário deve ser do tipo string!");
        }
        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 422
            throw new Error("O tipo do usuário deve ser 'ADMIN' ou 'NORMAL'!");
        }
        if (typeof userEmail !== "string") {
            errorCode = 422
            throw new Error("O email do usuário deve ser do tipo string!");
        }
        if (typeof userAge !== "number") {
            errorCode = 422
            throw new Error("A idade do usuário deve ser do tipo number!");
        }
        if (userAge <= 0) {
            errorCode = 422
            throw new Error("A idade do usuário deve ser maior que 0!");
        }

        users.push({
            id: users[users.length - 1].id + 1,
            name: userName,
            email: userEmail,
            type: userType,
            age: userAge
        })

        res.status(201).send(users)
    } catch (e: any) {
        res.status(errorCode).send(e.message)
    }
})


// ------------------------------------------------------------- //

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});