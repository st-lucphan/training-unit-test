import { AuthStorageService } from "../services/authStorage.service";
import { Authentication } from "./authentication";

describe("authentication", () => {
  const authentication = new Authentication();
  const mockGetToken = jest.spyOn(AuthStorageService.prototype, "getToken");
  const mockSetToken = jest.spyOn(AuthStorageService.prototype, "setToken");
  const mockRemoveToken = jest.spyOn(
    AuthStorageService.prototype,
    "removeToken"
  );

  const token = "123";
  mockGetToken.mockImplementation(() => "token");
  mockSetToken.mockImplementation(() => "abc");
  mockRemoveToken.mockImplementation(() => null);
  test("isAuthenticated", () => {
    authentication.isAuthenticated();
    expect(mockGetToken).toBeCalled();
  });

  test("login", () => {
    authentication.login(token);
    expect(mockSetToken).toBeCalled();
    expect(mockSetToken).toBeCalledWith("123");
  });

  test("logout", () => {
    authentication.signOut();
    expect(mockRemoveToken).toBeCalled();
  });
});
