function plaindrom(str) {
  str = str.toLowerCase();
  const revrced = str.split("").reverse().join("");
  return str === revrced;
}

console.log(plaindrom("madam"));
console.log(plaindrom("mam"));
console.log(plaindrom("komola"));
