function max(num1, num2) {
  if (num1 === num2) {
    console.log("Both are same");
  } else {
    let result = num1 > num2 ? num1 : num2;
    console.log(`Max is ${result}`);

    //Using inbuilt max function
    // console.log(`Max is ${Math.max(num1, num2)}`);
  }
}
max(7, 6);
