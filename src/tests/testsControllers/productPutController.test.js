jest.mock("../../models/products")
const ProductModel = require("../../models/products")
const productPutController = require("../../controllers/productPutController")

describe("Product Controller", () => {

  it('Shoul be able to get product and modify', async () => {
    const reqMock = { 
      params: {id: "10"},
      body: { name: 'Batata', price: 2500 },
    }

    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productPutController(reqMock, resMock)

    expect(resMock.json).toHaveBeenCalledTimes(1)
    expect(ProductModel.findByIdAndUpdate).not.toBeUndefined()
  })
})