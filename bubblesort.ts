const arr1: Array<number>  = [0, 9, 10, 2, 5, 3]
const arr2: Array<number>  = [4, 1, 2, 5, 3, 0]
const arr3: Array<number>  = [14, 20, 2, 1, 5]



let temp = 0 
const func = (arr: Array<number>): Array<number> => {
	for (let i = 0; i < arr.length; i++){
		for (let y = i + 1; y < arr.length; i++){
			if (arr[i] > arr[y]) {
				temp = arr[i];
				arr[i] = arr[y];
				arr[y] = temp;
			}
		}
	}
	return arr
}


console.log("Testing")
console.log(func(arr1))
console.log(func(arr2));
console.log(func(arr3))