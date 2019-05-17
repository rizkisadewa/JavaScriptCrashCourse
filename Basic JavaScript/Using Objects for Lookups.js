// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val]

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("delta"));
console.log(phoneticLookup("echo"));
console.log(phoneticLookup("foxtrot"));

/*
Objects can be thought of as a key/value storage, like a dictionary.
If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain.
This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

    var alpha = {
      1:"Z",
      2:"Y",
      3:"X",
      4:"W",
      ...
      24:"C",
      25:"B",
      26:"A"
    };
    alpha[2]; // "Y"
    alpha[24]; // "C"

    var value = 2;
    alpha[value]; // "Y"

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

1. phoneticLookup("alpha") should equal "Adams"
2. phoneticLookup("bravo") should equal "Boston"
3. phoneticLookup("charlie") should equal "Chicago"
4. phoneticLookup("delta") should equal "Denver"
5. phoneticLookup("echo") should equal "Easy"
6. phoneticLookup("foxtrot") should equal "Frank"
7. phoneticLookup("") should equal undefined
8. You should not modify the return statement
9. You should not use case, switch, or if statements
*/
