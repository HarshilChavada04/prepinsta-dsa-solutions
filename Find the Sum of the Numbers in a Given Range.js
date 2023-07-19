//Direct Formula = b*(b+1)/2 - a*(a+1)/2 + a

//Solution using a brute force approach
function findingTheSumInRange(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
findingTheSumInRange(5, 10);
