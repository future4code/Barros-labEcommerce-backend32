import { Request, Response } from "express";
import { connection } from "../data/connection";
// import getAddressInfo from "../data/services/getAddressInfo";
import { user } from "../types";

export default async function getUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const result = await connection.raw(`
         SELECT * FROM labecommerce_users;
      `)
      
      res.status(201).send(result)

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ouch! An unexpected error occurred!")
      }

   }
}