function fibsRec(n) {
  if (n <= 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    let array = fibsRec(n - 1);
    return array.concat([array[array.length - 2] + array[array.length - 1]]);
  }
}

console.log(fibsRec(-2)); // returns []
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
