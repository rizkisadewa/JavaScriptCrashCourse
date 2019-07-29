function sumFibs(num) {
  var beforeNumber = 0;
  var currNumber = 1;
  var result = 0;

  while(currNumber <= num){
    if(currNumber % 2 !== 0){
      result += currNumber;
    }

    currNumber += beforeNumber;
    beforeNumber = currNumber - beforeNumber;
  }

  return result;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

1. sumFibs(1) should return a number.
2. sumFibs(1000) should return 1785.
3. sumFibs(4000000) should return 4613732.
4. sumFibs(4) should return 5.
5. sumFibs(75024) should return 60696.
6. sumFibs(75025) should return 135721.

=========CODE EXPLANATION=====================

    Create a variable to keep record of the current and previous numbers along with the result that will be returned.
    Use a while loop to make sure we do not go over the number given as parameter.
    We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
    Complete the Fibonacci circle by rotating getting the next number and swapping values after.
    Return the result.

======================================
  
*/
