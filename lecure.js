/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.0);
console.log(0.1 + 0.2);

//string to number
console.log(Number('23'));
console.log(+'23');

console.log(Number.parseInt('30px', 10));
console.log(Number.parseFloat('2.5rem'));

console.log(Number.isNaN(20));
console.log(Number.isNaN(20 / 0));
console.log(Number.isNaN(+'20'));

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));

console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
*/

/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(27 ** (1 / 3));

console.log(Math.max(5, 18, 50, 89, 99));
console.log(Math.min(5, 18, 50, 89, 99));

console.log(Math.PI * parseFloat('10cm') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0..1 -> 0...(max - min) -> min... max
console.log(randomInt(10, 20));
console.log(randomInt(25, 100));


//Rounding integers
console.log(`---------------------------------------------------`);
console.log(Math.trunc(23.3));
console.log(Math.round(23.3));

console.log('');

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log('');

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log('');

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log('');
console.log('');

console.log(Math.floor(-23.3));
console.log(Math.trunc(-23.3));

//rounding decimals
console.log(`--------------------`);
console.log((2.7).toFixed(0)); //always return a string
console.log((2.7).toFixed(3));
*/
/*
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];

    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
}

let arr = [9, 5, 1, 4, 3];
console.log(arr);
insertionSort(arr);
console.log(arr);
*/

/*
//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);
*/

/*
console.log(2 ** 53 -1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(827523852308420934820934820935720834092384n);

//operations
console.log((1000n + 1000000n));
console.log(20n === 20); //false
*/

/*
const now = new Date();
console.log(now);
console.log(new Date(' december 20, 2015 22:17'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2030, 10, 19, 15, 23,5)); //js uses months from 0-11

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//working with dates
const future = new Date(2030, 10, 19, 15, 23,5)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.toISOString());
console.log(future.getTime());
*/

// const sum = 388476.23
// console.log(new Intl.NumberFormat('en-US').format(num));

const ingredients = ['olives', 'spinach'];
const pizzaTimmer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('waiting');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimmer);
  console.log('order canceled');
}
