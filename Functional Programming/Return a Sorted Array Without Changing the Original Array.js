var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArray = [];
  newArray = arr.concat(newArray);

  return newArray.sort();

  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);

/*
A side effect of the sort method is that it changes the order of the elements in the original array.
In other words, it mutates the array in place.
One way to avoid this is to first concatenate an empty array to the one being sorted (remember that concat returns a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array,
and not mutate the globalArray variable.

1. Your code should use the sort method.
2. Your code should use the concat method.
3. The globalArray variable should not change.
4. nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].
*/
