export const checkArray = (array: number[]) => {
  const isNumberArray = array?.every((item) => typeof item === "number");
  if (!array || array.length <= 1 || !isNumberArray) {
    return false;
  } else {
    const newArray = [...array];
    const test = newArray.sort((a, b) => a - b);
    return JSON.stringify(array) === JSON.stringify(test);
  }
};
