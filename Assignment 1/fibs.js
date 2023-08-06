function fibs(n) {
  array = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) array.push(0);
    else if (i === 1) array.push(1);
    else {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }

  return array;
}

console.log(fibs(-2)); // returns []
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
