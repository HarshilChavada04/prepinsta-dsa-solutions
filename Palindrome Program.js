function palindrome(num) {
  let remainder = 0;
  let reverse = 0;
  let originalNum = num;
  while (num !== 0) {
    remainder = num % 10;
    reverse = reverse * 10 + remainder;
    num = Math.floor(num / 10);
  }
  console.log(
    originalNum === reverse
      ? "Number is Palindrom."
      : "Number is not Palindrome."
  );
}
palindrome(1221);
