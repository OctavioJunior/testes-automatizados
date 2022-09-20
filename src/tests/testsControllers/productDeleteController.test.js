jest.mock("../../models/products")
const ProductModel = require("../../models/products")
const productDeleteController = require("../../controllers/productDeleteController")

describe("Product Controller", () => {

  it("Should be able to delete the product by id", async() => {
    const reqMock = {params: {id: "3"}}
    
    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
    }

    await productDeleteController(reqMock, resMock)
    
    expect(ProductModel.findByIdAndDelete).toHaveBeenLastCalledWith(reqMock.params.id)
  })
})