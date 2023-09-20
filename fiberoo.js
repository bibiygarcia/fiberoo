// Problem 3
function fib() {
  const fibArray = [0, 1];
  for (let i = 0; i < 48; i++) {
    fibArray.push(fibArray[i] + fibArray[i + 1]);
  }
  return fibArray;
}

console.log(fib()); // correct

function numsToStrings(data) {
  const strArray = [];
  for (let i = 0; i < data.length; i++) {
    strArray.push(data[i].toString());
  }
  return strArray;
}

// const testData = [1, 2, 3];

console.log(numsToStrings(fib()));

function numEvenNums(data) {
  let evenNums = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      evenNums++;
    }
  }
  return evenNums;
}

console.log(numEvenNums(fib()));
