jest.mock("../../models/products")
const ProductModel = require("../../models/products")
const productPostController = require("../../controllers/productPostController")

describe("Product Controller", () => {

  it('Should be able created a new product with name', async () => {
    const reqMock = {
      body: { name: 'Batata', price: 2500 }
    }

    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productPostController(reqMock, resMock)

    //Verifica se houve resposta do controlador
    expect(resMock.json.mock.calls).toHaveLength(1)
    //Verifica se a função foi chamada
    expect(ProductModel.create).toHaveBeenCalledTimes(1)
  })
})