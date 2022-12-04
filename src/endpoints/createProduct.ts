import { Request, Response } from "express";
import { connection } from "../data/connection";
import { products } from "../types"

export default async function createProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, price, img_url } = req.body

      if (!name || !price || !img_url) {
         res.statusCode = 422
         throw "'name', 'price' and 'image url address' are required"
      }

      const id: string = Date.now().toString()

      const newProduct: products = { id, name, price, img_url }

      await connection('labecommerce_products').insert(newProduct)

      res.status(201).send("Product created!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ouch! An unexpected error occurred!")
      }

   }
}