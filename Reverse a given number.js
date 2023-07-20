function reverse(num) {
  let remainder = 0;
  let reverse = 0;
  while (num !== 0) {
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
  }
  console.log("Reverse of a number is: " + reverse);
}
reverse(1234);
