//In an array, all elements appears thric and one element appears once. Find that element
//e.g Input : [4,5,6,4,6,7,6,5,4,5] => 7 as 7 is the only item that occurs only once in the array

const findOnceAppeared = (array) => {
    let obj = {};

    //push each array elements in object and set it's value to 1
    //if the same element recurres, increase it's value by 1
    array.forEach(item => {
        if(obj[item]) {
            obj[item] = obj[item] + 1;
        } else{
            obj[item] = 1;
        }
    })
    console.log(obj);
    //iterate through obj and return the key which has value : 1
    for(i in obj) {
        if(obj[i] === 1) {
            return i;
        }
    }

    return null;
}

console.log(findOnceAppeared([4,5,6,4,6,7,6,5,4,5]));