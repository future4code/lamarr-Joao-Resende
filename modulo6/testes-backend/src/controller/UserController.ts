import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {
   constructor(private userBusiness: UserBusiness){}

   async getUserById(req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id
  
        const user = await this.userBusiness.getUserById(id)
  
        res.status(200).send(user)
      } catch (error: any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
    }
}

