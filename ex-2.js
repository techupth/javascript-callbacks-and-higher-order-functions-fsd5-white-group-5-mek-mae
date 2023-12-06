//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  operation(array);
  return value >= 5 ? true : false;
}

function higherThan70(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 70) {
      count++;
    }
  }
  value = count;
}

let value = 0;

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, higherThan70);
scoreRoom2Result = atLeastFive(studentScoresRoom2, higherThan70);
scoreRoom3Result = atLeastFive(studentScoresRoom3, higherThan70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
