function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(10));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));


/*
The less than or equal to operator (<=) compares the values of two numbers.
If the number to the left is less than or equal to the number to the right, it returns true.
If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

Examples

    4 <= 5 // true
    '7' <= 7 // true
    5 <= 5 // true
    3 <= 2 // false
    '8' <= 4 // false

Add the less than or equal to operator to the indicated lines so that the return statements make sense.

1. testLessOrEqual(0) should return "Smaller Than or Equal to 12"
2. testLessOrEqual(11) should return "Smaller Than or Equal to 12"
3. testLessOrEqual(12) should return "Smaller Than or Equal to 12"
4. testLessOrEqual(23) should return "Smaller Than or Equal to 24"
5. testLessOrEqual(24) should return "Smaller Than or Equal to 24"
6. testLessOrEqual(25) should return "More Than 24"
7. testLessOrEqual(55) should return "More Than 24"
8. You should use the <= operator at least twice
*/
