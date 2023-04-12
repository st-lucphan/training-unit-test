import { isAscendingArray } from "./checkArray";

describe("ascending array function", () => {
  it("should return false", () => {
    expect(isAscendingArray([1, 7, 5])).toBeFalsy();
    expect(isAscendingArray([1, 5, 7, null])).toBeFalsy();
    expect(isAscendingArray([1, -5, 7])).toBeFalsy();
    expect(isAscendingArray(null)).toBeFalsy();
    expect(isAscendingArray(undefined)).toBeFalsy();
    expect(isAscendingArray([])).toBeFalsy();
  });

  it("should return true", () => {
    expect(isAscendingArray([1])).toBeTruthy();
    expect(isAscendingArray([1, 2, 4])).toBeTruthy();
    expect(isAscendingArray([1.23, 1.234, 4])).toBeTruthy();
    expect(isAscendingArray([0, 0, 4])).toBeTruthy();
  });
});
