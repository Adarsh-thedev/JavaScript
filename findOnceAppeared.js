//In an array, all elements appears thric and one element appears once. Find that element

const findOnceAppeared = (array) => {
    let obj = {};

    array.forEach(item => {
        if(obj[item]) {
            obj[item] = obj[item] + 1;
        } else{
            obj[item] = 1;
        }
    })

    for(i in obj) {
        if(obj[i] === 1) {
            return i;
        }
    }

    return null;
}

console.log(findOnceAppeared([]));