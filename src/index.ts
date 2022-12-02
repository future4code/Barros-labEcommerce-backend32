import app from "./app"
import getAddressInfo from "./data/services/getAddressInfo"
import createUser from './endpoints/createUser'
import getUsers from "./endpoints/getUsers"


app.post('/users/create', createUser)
app.get('/users', getUsers)
