import { Request, Response } from "express"
import { PurchaseDataBase } from "../class/PurchaseDataBase"
import connection from "../database/connection"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const purchaseDB = new PurchaseDataBase(connection);

        const result = await purchaseDB.selectUserPurchases(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}