import { Request, Response } from "express"
import { UserDataBase } from "../class/UserDataBase"
import connection from "../database/connection"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userBD = new UserDataBase(connection);
        const result = await userBD.selectUsers();
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}