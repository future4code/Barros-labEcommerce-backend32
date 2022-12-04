import { Request, Response } from "express";
import { connection } from "../data/connection";
// import getAddressInfo from "../data/services/getAddressInfo";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 422
         throw "'name', 'email' and 'password' are required"
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, email, password }

      await connection('labecommerce_users').insert(newUser)

      res.status(201).send("User created!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ouch! An unexpected error occurred!")
      }

   }
}