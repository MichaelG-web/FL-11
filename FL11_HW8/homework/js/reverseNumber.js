let reversNumber = (a) => {
  let lengthNumber = 0;
  let copyNumber = Math.abs(a);
  let result = 0;
  while (Math.trunc(copyNumber) > 0) {
    copyNumber = copyNumber / 10;
    lengthNumber++;
  }
  for (let i=1; i <= lengthNumber; i++) {
    copyNumber = a % 10;
    result += copyNumber * Math.pow(10, lengthNumber - i);
    a = Math.trunc(a / 10);
  }
  return result;
}
reversNumber(4589);
