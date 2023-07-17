//Using Recursive Approach :
function usingRecursion(number) {
  if (number === 0) {
    return 0;
  }
  return number + usingRecursion(number - 1);
}
console.log(usingRecursion(5));

//Using the formula :
function usingFormula(number) {
  return (number * (number + 1)) / 2; //(N*(N+1)/2)
}
console.log(usingFormula(5));
