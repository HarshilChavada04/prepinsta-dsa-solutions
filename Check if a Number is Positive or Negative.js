// Method 1: Using Brute Force
// Method 2: Using Nested if-else Statements
// Method 3: Using Ternary Operators

//Solution using the Ternary Operator

function numberState(num) {
  var result = "";
  if (num === 0) {
    result = "Number is Zero";
  } else {
    result = num > 0 ? "Number is Positive" : "Number is Negative";
  }
  return result;
}
console.log(numberState(-2));
