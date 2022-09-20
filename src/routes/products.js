const { Router } = require("express")
const productRouter = new Router()
const ProductModel = require("../models/products.js")
const productGetIdController = require("../controllers/productGetIdController")
const productPostController = require("../controllers/productPostController")
const productDeleteController = require("../controllers/productDeleteController")
const productGetAllController = require("../controllers/productGetAllController")
const productPutController = require("../controllers/productPutController")

productRouter.get('/', productGetAllController)

productRouter.get('/:id', productGetIdController)

productRouter.post('/', productPostController)

productRouter.delete('/:id', productDeleteController)

productRouter.put('/:id', productPutController)

module.exports = productRouter