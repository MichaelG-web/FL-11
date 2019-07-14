let isBigger = (a, b) => a > b;
function isSmaller(a, b) {
  return !isBigger(a, b);
}
isSmaller(5,10);
