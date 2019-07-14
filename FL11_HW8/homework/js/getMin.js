function getMin() {
  let minNumber = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < arguments[i+1]) {
      minNumber = arguments[i];
    }
  }
  return minNumber;
}
getMin(5, 8, -2, 100);
