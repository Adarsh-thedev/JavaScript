//#LC1
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const twoSum = (nums, target) => {
    //Initialize an object
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        
        //Check if the element is compliment of any encountered element
        if(nums[i] in obj) {
            return [obj[nums[i]], i];
        } else {
            //else push the compliment in the object
            let compliment = target - nums[i];
            obj[compliment] = i;
        }
    }
    
    return false;
}

console.log(twoSum([2,7,11,15],9));