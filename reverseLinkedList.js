//Reverse a linked list
// 10 -> 25 -> 30 -> 35 => 35 -> 30 -> 25 -> 10

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    append(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const reverseLinkedList = (list) => {
    if(!list.head || list.head.next === null) {
        return list;
    }

    let previousNode = null, currentNode = list.head;
    while(currentNode) {
        let temp = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = temp;
    }
    return previousNode;
} 

let myList = new LinkedList();
myList.append(10);
myList.append(25);
myList.append(30);
myList.append(35);
console.log(reverseLinkedList(myList));