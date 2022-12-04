import app from "./app"
import createProduct from "./endpoints/createProduct"
import createUser from './endpoints/createUser'
import getProducts from "./endpoints/getProducts"
import getUsers from "./endpoints/getUsers"



app.get('/users', getUsers)
app.post('/users/create', createUser)

app.get('/products', getProducts)
app.post('/products/create', createProduct)