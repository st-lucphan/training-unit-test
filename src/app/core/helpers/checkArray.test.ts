import { checkArray } from "./checkArray";

describe("ascending array function", () => {
  it("should return false", () => {
    expect(checkArray([1, 7, 5])).toBeFalsy();
    expect(checkArray([1, 5, 7, null])).toBeFalsy();
    expect(checkArray([1, -5, 7])).toBeFalsy();
    expect(checkArray(null)).toBeFalsy();
    expect(checkArray(undefined)).toBeFalsy();
    expect(checkArray([])).toBeFalsy();
    expect(checkArray([1])).toBeFalsy();
  });

  it("should return true", () => {
    expect(checkArray([1, 2, 4])).toBeTruthy();
    expect(checkArray([1.23, 1.234, 4])).toBeTruthy();
    expect(checkArray([0, 0, 4])).toBeTruthy();
  });
});
