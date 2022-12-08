import { Request, Response } from "express"
import { BaseDatabase } from "../database/BaseDatabase"
import { ProductDatabase } from "../database/ProductDatabase"
import { PurchaseDatabase } from "../database/PurchaseDatabase"
import { UserDatabase } from "../database/UserDatabase"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const findUser = await UserDatabase.getUserById(userId)

        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const findProduct = await ProductDatabase.getProductById(productId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }


        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )


        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        await PurchaseDatabase.createPurchase(
            purchase.getId(),
            purchase.getUserId(),
            purchase.getProductId(),
            purchase.getQuantity(),
            purchase.getTotalPrice()
        )

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}