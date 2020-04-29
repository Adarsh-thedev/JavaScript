//WAP to remove duplicate items from a sorted array

const removeDuplicatesFromSortedArray = (array) => {
    //Initialize a variable to keep track of last distinct item's index
    let indexOfLastDistinct = 0;
    
    //Itrate through the array and kepp replacing array[indexOfLastDistinct] with array[i]
    //and increase the value of indexOfLastDistinct if the next item is distinct
    for(let i = 0; i < array.length; i++) {
        array[indexOfLastDistinct] = array[i];
        if(array[i] !== array[i+1]) {
            indexOfLastDistinct++;
        } 
    }

    //We are left with some extra elements
    //find the no of such elements by substracting indexOfLastDistinct from length of array
    let noOfItemsToRemove = array.length - indexOfLastDistinct;

    //remove rest of the elements from the array
    for(let i = 0; i < noOfItemsToRemove; i++) {
        array.pop();
    }
    
    return array;
}

console.log(removeDuplicatesFromSortedArray([1,2,3,3,3,5,5,7]));