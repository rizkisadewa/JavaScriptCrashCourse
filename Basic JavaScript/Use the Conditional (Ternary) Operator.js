function checkEqual(a, b) {
  return a === b ? true : false;
}

console.log(checkEqual(1, 2));
console.log(checkEqual(1, 1));
console.log(checkEqual(1, -1));

/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? statement-if-true : statement-if-false;

The following function uses an if-else statement to check a condition:

    function findGreater(a, b) {
      if(a > b) {
        return "a is greater";
      }
      else {
        return "b is greater";
      }
    }

This can be re-written using the conditional operator:

    function findGreater(a, b) {
      return a > b ? "a is greater" : "b is greater";
    }

Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either true or false.

1. checkEqual should use the conditional operator
2. checkEqual(1, 2) should return false
3. checkEqual(1, 1) should return true
4. checkEqual(1, -1) should return false
*/
