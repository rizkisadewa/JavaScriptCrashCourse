function addTogether() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number')?
    undefined:
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === 'number' ?
        n + args[0]:
        undefined;
}

console.log(addTogether(2, 3));

/*
=============PROBLEM EXPLANATION===============
It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:

    It has to add two numbers passed as parameters and return the sum.
    It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
    It has to check if it has one or two arguments passed. More are ignored.
    If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.


=============CODE EXPLANATION==============

    First I iterate through the arguments and check for arguments that are not a number and return undefined
    If it’s not I then check if the arguments length is above 1, if it is I sum the arguments using Array.prototype.reduce
    Else I return a function that checks if the passed in argument is a number and sum it, if not return undefined
============================================

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

1. addTogether(2, 3) should return 5.
2. addTogether(2)(3) should return 5.
3. addTogether("http://bit.ly/IqT6zt") should return undefined.
4. addTogether(2, "3") should return undefined.
5. addTogether(2)([3]) should return undefined.

*/
