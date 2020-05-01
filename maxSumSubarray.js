//Given an array, find a subarray with the largest sum
//For example, for the array of values [−2, 1, −3, 4, −1, 2, 1, −5, 4]
//the contiguous subarray with the largest sum is [4, −1, 2, 1], with sum 6.

const maxSubarray = (array) => {
    let maxSoFar = array[0], maxEndingHere = 0;
    for(let i = 0; i < array.length; i++) {
        maxEndingHere = maxEndingHere + array[i];
        if(maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
        }
        if(maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
    return maxSoFar;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
