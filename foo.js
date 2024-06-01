let names = [1,2,3,4,5,76,8]
let  i = 0 
while( i < 10){ 
	let ind = i % names.length
	console.log("Index is", ind, i , names.length)
	console.log("Value is ", names[ ind])
	i++
}