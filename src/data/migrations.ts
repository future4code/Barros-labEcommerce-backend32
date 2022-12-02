import { connection } from "./connection"
import users from "./users.json"
import products from "./products.json"
import purchases from "./purchases.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS labecommerce_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS labecommerce_products (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price VARCHAR(255) NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS labecommerce_purchases (
         id VARCHAR(255) PRIMARY KEY,
         user_id VARCHAR(255) NOT NULL, 
            FOREIGN KEY (user_id) REFERENCES labecommerce_users (id),
         product_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_id) REFERENCES labecommerce_products (id),
         quantity VARCHAR(255) NOT NULL,
         total_price VARCHAR(255) NOT NULL
      );


   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula_webservices_users")
   .insert(users)
   .then(() => { console.log("Users created") })
   .catch(printError)

const insertProducts = () => connection("aula_webservices_users")
   .insert(products)
   .then(() => { console.log("Products created") })
   .catch(printError)

const insertPurchases = () => connection("aula_webservices_users")
   .insert(purchases)
   .then(() => { console.log("Purchases created") })
   .catch(printError)



const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers, insertProducts)
   .finally(closeConnection)