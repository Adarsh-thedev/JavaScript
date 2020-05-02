//Reverse a linked list
// 10 -> 25 -> 30 -> 35 -> null => 35 -> 30 -> 25 -> 10 -> null

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
    //If list is emepty or has only one node, return the list as it is
    if(!list.head || list.head.next === null) {
        return list;
    }

    //initiate previousNode = null and currentNode as head node
    let previousNode = null, currentNode = list.head;
    while(currentNode) {
        //hold the reference of next node in original list in temp
        let temp = currentNode.next;
        //reverese pointers
        //null(prev) <- head(current)
        currentNode.next = previousNode;
        //shift pointers of previousNode and currentNode to respective next nodes;
        previousNode = currentNode;
        currentNode = temp;
    }
    //at the end previousNode will point to last node of the original list 
    //and cureentNode will point to null
    //The list is reversed and head will be previousNode
    
    return previousNode;
} 

let myList = new LinkedList();
myList.append(10);
myList.append(25);
myList.append(30);
myList.append(35);
console.log(reverseLinkedList(myList));