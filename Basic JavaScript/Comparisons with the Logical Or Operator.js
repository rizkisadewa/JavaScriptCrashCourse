function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));

/*
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols (|). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

    if (num > 10) {
      return "No";
    }
    if (num < 5) {
      return "No";
    }
    return "Yes";

will return "Yes" only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

    if (num > 10 || num < 5) {
      return "No";
    }
    return "Yes";

Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

1. You should use the || operator once
2. You should only have one if statement
3. testLogicalOr(0) should return "Outside"
4. testLogicalOr(9) should return "Outside"
5. testLogicalOr(10) should return "Inside"
6. testLogicalOr(15) should return "Inside"
7. testLogicalOr(19) should return "Inside"
8. testLogicalOr(20) should return "Inside"
9. testLogicalOr(21) should return "Outside"
10. testLogicalOr(25) should return "Outside"
*/
