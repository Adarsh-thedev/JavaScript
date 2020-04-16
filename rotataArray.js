//WAP to rotate an array
const rotate = (array, rotateValue) => {
    const length = array.length;
    const newArray = [];
    for(let i=0; i<length; i++) {
        newArray[(i+rotateValue)%length] = array[i];
    }
    return newArray;
}

console.log(rotate([1,2,3,4,5]));