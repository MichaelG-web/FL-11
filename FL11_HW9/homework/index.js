let getNumbers = strInput => {
  let arrOutput = [];
  let counter = 0;
  for (let i = 0; i < strInput.length; i++) {
    if (!isNaN(strInput.slice(i, i + 1))) {
      arrOutput[counter] = +strInput.slice(i, i + 1);
      counter++;
    }
  }
  return arrOutput;
}
function findTypes() {
  let result = {};
  let keys = '';
  for (let i = 0; i < arguments.length; i++) {
    keys = typeof arguments[i];
    typeof result[keys] === 'undefined' ? result[keys] = 1 : result[keys]++;
  }
  return result;
}
let executeForEach = (arrInput, funct) => {
  for (let i = 0; i < arrInput.length; i++) {
    funct(arrInput[i]);
  }
}
let mapArray = (arrInput, funInput) => {
  let arrOut = [];
  executeForEach(arrInput, a => {
    arrOut[arrOut.length] = funInput(a);
  });
  return arrOut;
}
let filterArray = (arrInput, funInput) => {
  let arrOut = [];
  executeForEach(arrInput, a => {
    if(funInput(a)) {
      arrOut[arrOut.length] = a;
    }
  });
  return arrOut;
}
let showFormattedDate = a => {
  let monthBase = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = a.getFullYear();
  let month = monthBase[a.getMonth()];
  let date = a.getDate();
  return `Date: ${month} ${date} ${year}`;
}
let canConvertToDate = a => {
  return !!Date.parse(a);
}
let daysBetween = (a, b) => {
  let mult = 86400000;
  let c = Math.ceil(Math.abs(b - a)/mult);
  return c;
}
let getAmountOfAdultPeople = data => {
  let massAges = [];
  let yearDays = 365;
  let yearOld = 18;
  for (let i = 0; i < data.length; i++) {
    massAges[i] = Math.trunc(daysBetween(new Date(data[i]['birthday']),new Date())/yearDays);
  }
  return filterArray(massAges, function(el) {
    return el > yearOld;
  }).length;
}
let keys = a => {
  let counter = 0;
  let massKeys = [];
  for (let key in a) {
    if (key) {
      massKeys[counter] = key;
      counter++;
    }
  }
  return massKeys;
}
let values = a => {
  let counter = 0;
  let massKeys = [];
  for (let key in a) {
    if (key) {
      massKeys[counter] = a[key];
      counter++;
    }
  }
  return massKeys;
}
let massDate = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
