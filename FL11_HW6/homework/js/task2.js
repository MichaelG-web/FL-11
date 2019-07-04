let a = parseInt(prompt('Введите сторону a:',''), 10);
let b = parseInt(prompt('Введите сторону b:',''), 10);
let c = parseInt(prompt('Введите сторону c:',''), 10);
if (a + b < c || b + c < a || a + c < b) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c && a === c) {
  console.log('Eequivalent triangle');
} else if (a === b || b === c || a === c) {
  console.log('Isosceles triangle');
} else {
  console.log('Normal triangle');
}
