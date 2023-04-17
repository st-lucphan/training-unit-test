import { ProductList, Product } from "./ProductList";

const data: Product = {
  id: "1",
  name: "apple",
  price: 1000,
  number: 1,
  discount: [
    {
      percent: 5,
      number: 1,
    },
    {
      percent: 10,
      number: 2,
    },
  ],
};

const data2: Product = {
  id: "2",
  name: "apple",
  price: 1000,
  number: 2,
  discount: [
    {
      percent: 5,
      number: 1,
    },
    {
      percent: 10,
      number: 2,
    },
  ],
};

const dataUpdate: Product = {
  id: "1",
  name: "apple Gala",
  price: 10000,
  number: 10,
  discount: [
    {
      percent: 3,
      number: 2,
    },
    {
      percent: 5,
      number: 4,
    },
  ],
};
describe("test product order", () => {
  describe("add product method", () => {
    const order = new ProductList([]);
    order.addProduct(data);
    it("should update product successfully", () => {
      expect(order.getProductList()).toHaveLength(1);
      expect(order.productList).toContainEqual(data);
    });
  });

  describe("get product method", () => {
    const order = new ProductList([data]);
    const product = order.getProduct("1");
    it("should get product successfully", () => {
      expect(product).toEqual(data);
    });
  });

  describe("remove product method", () => {
    const order = new ProductList([data]);
    order.removeProduct("1");
    it("should remove product successfully", () => {
      expect(order.productList).toEqual([]);
    });
  });

  describe("update product method", () => {
    const order = new ProductList([data]);
    order.updateProduct(dataUpdate);
    it("should update product successfully", () => {
      expect(order.productList).toEqual([dataUpdate]);
    });
  });

  describe("countTotalPayment method", () => {
    const order = new ProductList([data]);
    order.countTotalPayment();

    it("should count total payment correctly", () => {
      expect(order.countTotalPayment()).toEqual(950);
      order.addProduct(data2);
      expect(order.countTotalPayment()).toEqual(2750);
    });
  });
});
