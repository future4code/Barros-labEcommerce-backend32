# labEcommerce-backend


### Coloque as informações do seu projeto, o link da documentação e o link deploy

GET http://localhost:3003/users
Content-Type: application/json

###

GET http://localhost:3003/products
Content-Type: application/json

###
POST http://localhost:3003/users/create
Content-type: application/json

{
    "name": "Renato Peçanha",
    "email": "Chub",
    "password": "nartain@gmail.com"
}

###
POST http://localhost:3003/products/create
Content-type: application/json

{
    "name": "Shineray 50cc Deboxada",
    "price": "2999",
    "img_url": "https://shineray.com.br/wp-content/uploads/2021/03/003.png"
}

