import { AuthStorageService } from "./authStorage.service";

const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
});
const setItemMock = jest.fn();
const getItemMock = jest.fn();
const removeItemMock = jest.fn();
describe("authStorage service", () => {
  beforeEach(() => {
    globalThis.window.localStorage.setItem = setItemMock;
    globalThis.window.localStorage.getItem = getItemMock;
    globalThis.window.localStorage.removeItem = removeItemMock;
  });

  afterEach(() => {
    setItemMock.mockClear();
    getItemMock.mockClear();
    removeItemMock.mockClear();
  });
  const authStorageService = new AuthStorageService();
  it("getItem method should be called once", () => {
    authStorageService.getToken();
    expect(getItemMock).toBeCalled();
  });
  it("setItem method should be called with the correct parameter", () => {
    authStorageService.setToken("test");
    expect(setItemMock).toBeCalled();
    expect(setItemMock).toBeCalledWith("token", "test");
  });

  it("removeItem method should be called once", () => {
    authStorageService.removeToken();
    expect(removeItemMock).toBeCalled();
  });
});
