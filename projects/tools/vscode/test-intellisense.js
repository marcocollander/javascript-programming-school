const sum = (a, b) => a + b;

sum(4, 6);

// console.log(sum(4, 6));

let a = 5;

a = '5';

if (!isNaN(a)) {
  console.log(a, 'jest liczbą!');
} else {
  console.log(a, 'nie jest liczba');
}

/*
 *		This is block comment
 *		Next line of block comment
 *   Next line
 *
 */

if (!Number.isNaN(a)) {
  console.log(a, 'jest liczbą!');
} else {
  console.log(a, 'nie jest liczba');
}

console.log(isNaN(a));
