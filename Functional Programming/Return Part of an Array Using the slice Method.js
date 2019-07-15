function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  var newArray = anim.slice(beginSlice, endSlice);

  return newArray;
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
var newInputAnim = sliceArray(inputAnim, 1, 3);
console.log(newInputAnim);

/*
The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice,
the second is the index for where to end the slice (and it's non-inclusive).
If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array.
The slice method does not mutate the original array, but returns a new one.

Here's an example:

    var arr = ["Cat", "Dog", "Tiger", "Zebra"];
    var newArray = arr.slice(1, 3);
    // Sets newArray to ["Dog", "Tiger"]

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices.
The function should return an array.

1. Your code should use the slice method.
2. The inputAnim variable should not change.
3. sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3) should return ["Dog", "Tiger"].
4. sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1) should return ["Cat"].
5. sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].
*/
