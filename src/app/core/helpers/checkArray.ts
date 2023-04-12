export const isAscendingArray = (array: number[]) => {
  const isNumberArray = array?.every((item) => typeof item === "number");
  if (!isNumberArray || array.length === 0) {
    return false;
  } else {
    const newArray = [...array];
    const test = newArray.sort((a, b) => a - b);
    return JSON.stringify(array) === JSON.stringify(test);
  }
};
