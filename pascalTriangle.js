const generate = (numRows) => {
  let array = [];
  for (let i = 0; i < numRows; i++) {
    array[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        array[i][j] = 1;
      } else {
        array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
      }
    }
  }
  return array;
};

console.log(generate(5));
