// Sorting function
var func = function (arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var y = i + 1; y < arr.length; y++) {
      // Increment 'y' instead of 'i'
      if (arr[i] > arr[y]) {
        temp = arr[i];
        arr[i] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
};

// Sorting test arrays
var arr1 = [0, 9, 10, 2, 5, 3];
var arr2 = [4, 1, 2, 5, 3, 0];
var arr3 = [14, 20, 2, 1, 5];

// Testing the sorting function
console.log("Testing");
console.log(func(arr1));
console.log(func(arr2));
console.log(func(arr3));

module.exports = func; // Exporting the sorting function
