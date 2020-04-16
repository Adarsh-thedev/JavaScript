//Given an array, find the number of all pairs with odd sum
// [1,2,3,4] => 4 as there are four possible pairs with resulting sum as odd num
// (1,2) (1,4) (2,3) (3,4) are the four pairs

const isEven = num => num % 2 === 0;

const countPairsWithOddSum = (array) => {
    let oddCounter = 0, evenCounter = 0;
    for(let i = 0; i < array.length; i++) {
        if(isEven(array[i])) {
            evenCounter++;
        } else {
            oddCounter++;
        }
    }
    //Odd + Even = Odd so all pairs will contain one odd and one even number
    //Total number of pairs will be equal to multiply of counts of even and odd numbers
    return oddCounter * evenCounter;
}

console.log(countPairsWithOddSum([1,2,3,4]));