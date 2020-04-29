//Merge two sorted linked lists and return it as a new list. 
//The new list should be made by splicing together the nodes of the first two lists.

class LinkedList {
    constructor() {
        this.head = {
            value : null,
            next : null
        }
        this.tail = {
            value : null,
            next : null
        }
        this.length = 0;
    }

    append(value) {
        let newNode = {
            value : value,
            next : null
        }
        if(this.head.value === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const myList1 = new LinkedList();
myList1.append(10);
myList1.append(11);
myList1.append(15);
myList1.append(19);

const myList2 = new LinkedList();
myList2.append(12);
myList2.append(13);
myList2.append(14);
myList2.append(17);
myList2.append(20);
console.log(mergeSortedList(myList2, myList1));

function mergeSortedList(list1, list2) {
    //If either of the LinkedLists are empty, return the another LinkedList
    if(list1.length === 0) {
        return list2;
    }
    
    if(list2.length === 0) {
        return list1;
    }

    //Initiate two variable containig heads of both LinkedLists
    let listOneItem = list1.head, listTwoItem = list2.head;
    let newList = new LinkedList();
    while(listOneItem && listTwoItem) {
        //If value of listOneItem is less then push it inside the linked list 
        //and pass the reference of listOneItem to the next item in the first LinkedList 
        if(listOneItem.value < listTwoItem.value) {
            newList.append(listOneItem);
            listOneItem = listOneItem.next;
        }
        //Else do the same thing with second LinkedList
        else {
            newList.append(listTwoItem);
            listTwoItem = listTwoItem.next;
        }

        //If any of the next pointers reffers to null, i.e end of the linked list
        //pass the reference to the another LinkedList 
        //and add rest of the nodes into newList as the previous list was already sorted
        if(listOneItem === null) {
            newList.append(listTwoItem);
        }
        if(listTwoItem === null) {
            newList.append(listOneItem);
        }
    }
    return newList;
}