function truthCheck(collection, pre) {
  // Create a counter to check how many are true
  var counter = 0;
  // check for each object
  for(var c in collection){
    // if it is has property and value is truthy
    if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
      counter++;
    }


  }

  // outside the loop, check to see if we got true for all of them
  // and return true or false
  return counter == collection.length;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

/*
============CODE EXPLANATION==================
    First I create a counter to check how many cases are actually true.
    Then check for each object if the value is truthy
    Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false
=============================================
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy.
Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

1. truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
2. truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
3. truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
4. truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
5. truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
6. truthCheck([{"single": "yes"}], "single") should return true
7. truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
8. truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
9. truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false

*/
