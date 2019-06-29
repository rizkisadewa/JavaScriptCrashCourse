function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();

  let i = 0;
  while (i < arr1.length) {
    localArray.splice(n, 0, arr1[i]);
    n++;

    i++;
  }
  return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

1. frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
2. frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
3. frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
4. All elements from the first array should be added to the second array in their original order.
5. The first array should remain the same after the function runs.
6. The second array should remain the same after the function runs.
*/
