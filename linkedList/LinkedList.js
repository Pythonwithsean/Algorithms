
class Node{ 
	constructor(val ){
		this.data = val	
		this.next = null;
}

	setNext(node){
		this.next = node
	}
}

class LinkedList { 
	head
	constructor(){
		this.head = null
	}

	isHead(){
		if(this.head == null) { 
				console.log("No Node has Been Created yet")
		}
		else{ 
			console.log(this.head.data)
		}
	}
	add(data){
		if(this.head == null){ 
			this.head = new Node(data)
		}
		else{ 
			let newNode = new Node(data)
			let temp = this.head
			this.head = newNode
			this.head.next = temp
		}
	}
	printAllNodes(){
		if(this.head == null ){ 
			console.log("Head is null")
		}
		else{
			let curr = this.head
			while(curr != null){
					console.log(curr.data)
					curr = curr.next
			}
		}
	}
	search(data){


	}

}

LinkedList = new LinkedList()
LinkedList.isHead()
LinkedList.add(22)
console.log(LinkedList)
LinkedList.add(44)
LinkedList.add(100)
LinkedList.add(55)
LinkedList.add(10000)
LinkedList.printAllNodes()