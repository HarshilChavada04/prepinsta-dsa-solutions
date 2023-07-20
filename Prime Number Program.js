//Using Recursion
let result = checkPrime(23, 2);
console.log(result === true ? "Number is Prime" : "Number is not prime");
function checkPrime(num, i) {
  if (num < 2) {
    return false;
  }
  if (num === i) {
    return true;
  }
  if (num % i === 0) {
    return false;
  }
  i += 1;
  return checkPrime(num, i);
}
