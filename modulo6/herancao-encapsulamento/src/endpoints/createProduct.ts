import { Request, Response } from "express"
import { ProductDatabase } from "../database/ProductDatabase"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const product = new Product(
            Date.now().toString(),
            name,
            price
        )

        await ProductDatabase.createProduct(
            product.getId(),
            product.getName(),
            product.getPrice()
        )

        res.status(201).send({ message: "Produto criado", product: product })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}