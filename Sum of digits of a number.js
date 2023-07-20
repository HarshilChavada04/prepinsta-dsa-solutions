function sumOfDigits(num) {
  let remainder = 0;
  let sum = 0;
  while (num != 0) {
    remainder = num % 10;
    sum = sum + remainder;
    num = Math.floor(num / 10);
  }
  console.log("Sum of digits of a number is: " + sum);
}
sumOfDigits(522);
