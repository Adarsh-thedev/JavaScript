//#LC1
const twoSum = (nums, target) => {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if(nums[i] in obj) {
            return [obj[nums[i]], i];
        } else {
            obj[compliment] = i;
        }
    }
    console.log(obj);
    return false;
}

console.log(twoSum([2,7,11,15],9));