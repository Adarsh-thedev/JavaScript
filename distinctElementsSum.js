//Sum of distinct elements among two given sets
//Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
//Output: 13 (distinct elements - 4, 7, 2 )

const distinctElementsSum = (array1, array2) => {
    //If there are no elements in either of the array return sum of elements of another array
    if(array1.length === 0) {
        return array2.reduce((a,b) => a + b); 
    }

    if(array1.length === 0) {
        return array2.reduce((a,b) => a + b); 
    }

    let sum = 0, obj = {};

    //push all the elements of array1 into obj and set value to true
    for(let i = 0; i < array1.length; i++) {
        obj[array1[i]] = true;
    }

    //iterate through array2
    for(let i = 0; i < array2.length; i++) {
        //if element of array2 exists in obj,change it's value to false else keep it true(it is distinct)
        if(obj[array2[i]]) {
            obj[array2[i]] = false;
        } else {
            obj[array2[i]] = true;
        }
    }

    //iterate through obj and add all the keys which have value : true
    for(item in obj) {
        if(obj[item] === true) {
            sum = sum + parseInt(item);
        }
    }

    return sum;
}

console.log(distinctElementsSum([3, 1, 7, 9], [2, 4, 1, 9, 3]));