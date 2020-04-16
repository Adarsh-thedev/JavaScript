//WAP to segregate an array
const isEven = num => num % 2 === 0;

const isOdd = num => !isEven(num);

const segregateArray = (array) => {
    let indexOfOdd = undefined;
    for(let i = 0; i < array.length; i++) {
        if(isOdd(array[i])) {
            indexOfOdd = i;
            break;
        }
    }
    if(indexOfOdd === undefined) {
        return array;
    } else {
        for(let i = indexOfOdd; i < array.length; i++) {
            if(isEven(array[i])) {
                let temp = array[indexOfOdd];
                array[indexOfOdd] = array[i];
                array[i] = temp;
                indexOfOdd = i;
            }
        }
    }
    return array;
}

console.log(segregateArray([2,5,4,6,7,8]));