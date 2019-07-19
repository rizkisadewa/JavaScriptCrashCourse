function nonMutatingConcat(original, attach) {
  // Add your code below this line
  let newArray = original.concat(attach);
  return newArray;
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second));


/*
Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way.
For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array.
It returns a new array and does not mutate either of the original arrays. Here's an example:

    [1, 2, 3].concat([4, 5, 6]);
    // Returns a new array [1, 2, 3, 4, 5, 6]

Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

1. Your code should use the concat method.
2. The first array should not change.
3. The second array should not change.
4. nonMutatingConcat([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5].


*/
