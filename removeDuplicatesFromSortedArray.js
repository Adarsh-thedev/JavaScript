//WAP to remove duplicate items from a sorted array

const removeDuplicatesFromSortedArray = (array) => {
    let indexOfLastDistinct = 0;
    
    for(let i = 0; i < array.length; i++) {
        array[indexOfLastDistinct] = array[i];
        if(array[i] !== array[i+1]) {
            indexOfLastDistinct++;
        } 
    }

    let noOfItemsToRemove = array.length - indexOfLastDistinct;

    for(let i = 0; i < noOfItemsToRemove; i++) {
        array.pop();
    }
    
    return array;
}

console.log(removeDuplicatesFromSortedArray([1,2,3,3,3,5,5,7]));