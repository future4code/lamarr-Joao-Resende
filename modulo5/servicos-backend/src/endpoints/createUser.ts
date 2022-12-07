import { Request, Response } from "express";
import getAddressInfo from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";
import { connection } from "../data/connection";

import { user } from "../types";

import dotenv from "dotenv";

dotenv.config();

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, zipcode } = req.body;

    if (!name || !nickname || !email || !zipcode) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' e 'zipcode' são obrigatórios";
    }

    const id: string = Date.now().toString();
    const address = await getAddressInfo(zipcode);

    await connection("User_Address").insert(address);

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    console.log(error);
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}
