import app from "./app"
import getAddressInfo from "./data/services/getAddressInfo"
import createUser from './endpoints/createUser'


app.post('/users/create', createUser)
