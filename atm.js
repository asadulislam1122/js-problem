function atm(balance, withdraw) {
  if (withdraw < 0) {
    return "Invalid input";
  }

  if (withdraw > balance) {
    return "Insufficient balance";
  } else if (withdraw === balance) {
    return "Balance will be zero";
  } else {
    return "Withdraw successful";
  }
}

console.log(atm(1000, 500));
console.log(atm(1000, 1500));
console.log(atm(1000, 1000));
console.log(atm(1000, -500));
