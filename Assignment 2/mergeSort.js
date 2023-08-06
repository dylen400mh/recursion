function mergeSort(array) {
  // base case
  if (array.length === 1) return array;

  let middleIndex = Math.ceil(array.length / 2);
  let leftSide = array.slice(0, middleIndex);
  let rightSide = array.slice(middleIndex);

  // merge sort each half of array
  leftSide = mergeSort(leftSide);
  rightSide = mergeSort(rightSide);

  // index to add number to in array
  let currentIndex = 0;

  // while both sides have unsorted numbers compare the first numbers of each array and add the overwrite existing array with smaller number
  while (leftSide.length && rightSide.length) {
    if (leftSide[0] < rightSide[0] || leftSide[0] === rightSide[0]) {
      array[currentIndex++] = leftSide.shift();
    } else {
      array[currentIndex++] = rightSide.shift();
    }
  }

  // add remaining numbers from arrays
  for (let number of leftSide) {
    array[currentIndex++] = number;
  }

  for (let number of rightSide) {
    array[currentIndex++] = number;
  }

  return array;
}

// test cases
console.log(mergeSort([1]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([3, 2, 4, 1]));
console.log(mergeSort([3, 6, 4, 2, 1, 5, 8, 7]));
