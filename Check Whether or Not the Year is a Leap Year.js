function leapYearCheckFnc(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
    console.log("Year is a leap year.");
  } else {
    console.log("Year is not a leap year.");
  }
}
leapYearCheckFnc(1800);
