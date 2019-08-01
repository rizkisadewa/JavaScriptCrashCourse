function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenedArray = [];

  // Create a function that adds an element if it is not an array
  // If it is an array, then loop through it and uses recursion on that array
  var flatten = function(arg){
    if(!Array.isArray(arg)){
      flattenedArray.push(arg);
    } else {
      for(var a in arg){
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;

}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

/*
=========CODE EXPLANATION=============

    Create a new variable to keep flattened arrays.
    Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
    It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
    Invoke the function, the first time you will always pass it an array, so it always fall in to the isArray branch
    Return the flattened array.

*/
