import { AuthStorageService } from "./authStorage.service";
describe("authStorage service", () => {
  const authStorageService = new AuthStorageService();
  it("getItem method should be called once", () => {
    const getItemMock = jest.spyOn(Storage.prototype, "getItem");
    authStorageService.getToken();
    expect(getItemMock).toBeCalled();
    expect(getItemMock).toBeCalledWith("token");
  });

  it("setItem method should be called with the correct parameter", () => {
    const setItemMock = jest.spyOn(Storage.prototype, "setItem");
    authStorageService.setToken("test");
    expect(setItemMock).toBeCalled();
    expect(setItemMock).toBeCalledWith("token", "test");
  });

  it("removeItem method should be called once", () => {
    const removeItemMock = jest.spyOn(Storage.prototype, "removeItem");
    authStorageService.removeToken();
    expect(removeItemMock).toBeCalled();
    expect(removeItemMock).toBeCalledWith("token");
  });
});
