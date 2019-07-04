let result = false;
let ax = parseInt(prompt('Введите точку a1',''),10);
let ay = parseInt(prompt('Введите точку a2',''),10);
let bx = parseInt(prompt('Введите точку b1',''),10);
let by = parseInt(prompt('Введите точку b2',''),10);
let cx = parseInt(prompt('Введите точку c1',''),10);
let cy = parseInt(prompt('Введите точку c2',''),10);
if (cx + cx === ax + bx && cy + cx === ay + by) {
  result = true;
}
console.log(result);
