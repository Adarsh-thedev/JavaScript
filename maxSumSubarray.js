//Given an array, find a subarray with the largest sum
//For example, for the array of values [−2, 1, −3, 4, −1, 2, 1, −5, 4]
//the contiguous subarray with the largest sum is [4, −1, 2, 1], with sum 6.

const maxSubarray = (array) => {
    let maxSoFar = array[0], maxEndingHere = 0;
    let start = 0, end = 0, s = 0;

    for(let i = 0; i < array.length; i++) {
        maxEndingHere = maxEndingHere + array[i];

        if(maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }

        if(maxEndingHere < 0) {
            maxEndingHere = 0;
            s = i + 1;
        }
    }

    let maxSumSubarray = [];
    for(let i = start; i <= end; i++) {
        maxSumSubarray.push(array[i]);
    }
    console.log(maxSoFar);
    return maxSumSubarray;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
