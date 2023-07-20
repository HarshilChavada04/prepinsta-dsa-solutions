let start = 1;
let end = 20;
let result = `Prime Numbers between ${start} and ${end} are: `;
for (let j = start; j <= end; j++) {
  if (findPrime(j)) {
    result = result + j + " ";
  }
}
console.log(result);

function findPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
