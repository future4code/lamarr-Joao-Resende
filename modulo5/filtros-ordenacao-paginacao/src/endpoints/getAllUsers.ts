import { Request, Response } from "express"
import selectAllUsers from "../queries/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {

      let name = req.query.name as string
      let type = req.params.type as string
      let order = req.query.order as string
      let sort = req.query.sort as string
      let size = Number(req.query.size)
      let page = Number(req.query.page)

      if (!name) {
         name = "%"
      }

      if (type === ":type") {
         type = "%"
      }

      if (!order) {
         order = "email"
      }

      if (!sort) {
         sort = "ASC"
      }

      if (order !== "name" && order !== "type") {
         order = "email"
      }

      if (sort && sort.toUpperCase() !== "ASC" && sort.toUpperCase() !== "DESC") {
         sort = "ASC"
      }

      if (isNaN(size) || size < 1) {
         size = 5
      }

      if (isNaN(page) || page < 1) {
         page = 1
      }

      let offset = size * (page - 1)

      const users = await selectAllUsers(name, type, order, sort, size, offset)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}