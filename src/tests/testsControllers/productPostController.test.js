jest.mock("../../models/products")
const ProductModel = require("../../models/products")
const productPostController = require("../../controllers/productPostController")

describe("Product Controller", () => {

  it('Should be able created a new product', async () => {
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

  it("Should be able created a new product witch name and price", async() => {
    const reqMock = {
      body: { name: 'Batata', price: 2500 }
    }
    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }
    
    //Informando o modelo pretendido
    ProductModel.create.mockReturnValue({ _id: "", name: 'Batata', price: 2500 })

    await productPostController(reqMock, resMock)

    expect(resMock.json).toHaveBeenCalledTimes(1)

    const responseMocked = resMock.json.mock.lastCall[0] //é igual à ...json.mock.call[0][0]
    // [[newProduct]]

    expect(responseMocked).toHaveProperty("name")
    expect(responseMocked).toHaveProperty("price")
  })
})