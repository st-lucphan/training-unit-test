import { isAscendingArray } from './checkArray';

describe('ascending array function', () => {
  describe('empty array or undefined parameters', () => {
    it('should return false', () => {
      expect(isAscendingArray([])).toBeFalsy();
      expect(isAscendingArray(null)).toBeFalsy();
      expect(isAscendingArray(undefined)).toBeFalsy();
    });
  });
  describe('array with 1 element', () => {
    it('should return false', () => {
      expect(isAscendingArray([null])).toBeFalsy();
      expect(isAscendingArray([undefined])).toBeFalsy();
    });
    it('should return true', () => {
      expect(isAscendingArray([1])).toBeTruthy();
    });
  });
  describe('array with many elements', () => {
    it('should return false', () => {
      expect(isAscendingArray([1, 7, 5])).toBeFalsy();
      expect(isAscendingArray([1, 5, 7, null])).toBeFalsy();
      expect(isAscendingArray([1, -5, 7])).toBeFalsy();
    });
    it('should return true', () => {
      expect(isAscendingArray([1, 2, 4])).toBeTruthy();
      expect(isAscendingArray([1.23, 1.234, 4])).toBeTruthy();
      expect(isAscendingArray([0, 0, 4])).toBeTruthy();
    });
  });
});
