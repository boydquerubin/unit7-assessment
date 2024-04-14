const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

// const tinyArray = getSizedArray(10);
// const smallArray = getSizedArray(100);
// const mediumArray = getSizedArray(1000);
// const largeArray = getSizedArray(10000);
// const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
// perf.start(); // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();

// console.log("Results for the extraLargeArray");
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

const arraySizes = {
  tinyArray: 10,
  smallArray: 100,
  mediumArray: 1000,
  largeArray: 10000,
  extraLargeArray: 100000,
};

// Timing results table
const resultsTable = {};

// Loop through each array size and measure the time for each function
for (const [arrayName, arraySize] of Object.entries(arraySizes)) {
  const array = getSizedArray(arraySize);

  // Measure time for doublerAppend
  perf.start();
  doublerAppend(array);
  const appendResult = perf.stop();

  // Measure time for doublerInsert
  perf.start();
  doublerInsert(array);
  const insertResult = perf.stop();

  // Store results in the table
  resultsTable[arrayName] = {
    append: appendResult.preciseWords,
    insert: insertResult.preciseWords,
  };
}

// Output results
console.log("Timing results for different array sizes:");
console.table(resultsTable);
