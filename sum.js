// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

function sumArry(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArry([1, 2, 3, 4]));
