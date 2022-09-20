jest.mock("../../models/products")
const ProductModel = require("../../models/products")
const productGetIdController = require("../../controllers/productGetIdController")

describe("Product Controller", () => {
  it("Should be able to get product by id", async () => {
    const reqMock = {params: {id:"19"}}

    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productGetIdController(reqMock, resMock)
    
    expect(ProductModel.findById).toHaveBeenLastCalledWith(reqMock.params.id)
  })
})