function greatestAmongThreeNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("Greatest number is num1");
  } else if (num2 > num3) {
    console.log("Greatest number is num2");
  } else {
    console.log("Greatest number is num3");
  }
}
greatestAmongThreeNumbers(5, 6, 7);
