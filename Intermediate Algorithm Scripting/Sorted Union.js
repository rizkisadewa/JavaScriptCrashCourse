function uniteUnique(arr1, arr2, arr3) {
  // Create an empty array to store our final result.
  var finalArray = [];

  // Loop through the argument object to truly made the program work with two or more arrays instead of 3
  for(var i=0;i<arguments.length;i++){
    var arrayArguments = arguments[i];

    // Loop trough the array at hand
    for(var j=0;j<arrayArguments.length;j++){
      var indexValue = arrayArguments[j];

      // Check if the value is already on the final array
      if(finalArray.indexOf(indexValue) < 0){
        finalArray.push(indexValue);
      }
    }

  }

  return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

/*
=========CODE EXPLANATION===============

    Create empty array finalResult to store the final result.
    Loop through the arguments object in the outer loop and store it in arrayArguments.
    The inner loop is used to loop through individual array elements.
    If the element doesn’t already exist in finalArray, add it.
    Return finalArray.

=======================================

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

1. uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
2. uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
3. uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
4. uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
