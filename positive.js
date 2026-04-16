function chekNumber(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "nagitive";
  } else {
    return "zero";
  }
}

console.log(chekNumber(5));
console.log(chekNumber(-3));
console.log(chekNumber(0));
