jest.mock("../../models/products")
// const mongoose = require("mongoose")
// const { MONGO_URI } = require("../constants")
const productGetAllController = require("../../controllers/productGetAllController")
const ProductModel = require("../../models/products")

describe("Product Controller", () => {
  // let conn;
  // beforeAll(async () => {
  //   conn = await mongoose.connect(MONGO_URI)
  // })

  it("Should be able to list all products", async() => {
    const reqMock = {}
    
    const resMock = {
      json: jest.fn(),
      status: jest.fn(() => resMock),
      // send: () => {},
    }

    await productGetAllController(reqMock, resMock)
        
    expect(ProductModel.find).toHaveBeenCalledTimes(1)
    expect(resMock.json.mock.calls).toHaveLength(1)
  })

  // afterAll(() => {
  //   conn.disconnect()
  // })
})