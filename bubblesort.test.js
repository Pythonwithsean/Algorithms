const func = require("./bubblesort");

describe("Bubble Sort ", () => {
  test("sorts an array in ascending order", () => {
    const arr = [0, 9, 10, 2, 5, 3];
    const sortedArr = func(arr);
    expect(sortedArr).toEqual([0, 2, 3, 5, 9, 10]);
  });

  test("sorts an array with negative numbers", () => {
    const arr = [-4, 1, -2, 5, -3, 0];
    const sortedArr = func(arr);
    expect(sortedArr).toEqual([-4, -3, -2, 0, 1, 5]);
  });

  test("sorts an array with duplicate numbers", () => {
    const arr = [14, 20, 2, 1, 5, 2];
    const sortedArr = func(arr);
    expect(sortedArr).toEqual([1, 2, 2, 5, 14, 20]);
  });

  test("sorts an array with one element", () => {
    const arr = [42];
    const sortedArr = func(arr);
    expect(sortedArr).toEqual([42]);
  });
});
