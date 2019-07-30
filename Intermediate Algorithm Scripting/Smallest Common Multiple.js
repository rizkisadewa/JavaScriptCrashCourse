function smallestCommons(arr) {

  var range = [];
  for(var i=Math.max(arr[0], arr[1]); i>= Math.min(arr[0], arr[1]); i--){
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for(i=1;i<range.length;i++){
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm*range[i]) / GCD;
  }

  return lcm ;

  function gcd(x, y){ // implement the Euclidean Algorithm
    if(y === 0)
      return x;
    else
      return gcd(y, x%y);
  }

}


console.log(smallestCommons([1,5]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([2,10]));
console.log(smallestCommons([1,13]));
console.log(smallestCommons([23,18]));

/*
==========PROBLEM EXPLANATION================
The smallest common multiple between two numbers is the smallest number that both numbers can divide into.
This concept can be extended to more than two numbers as well.

We can first start with just finding the smallest common multiple between two numbers.
Naively, you can start writing out multiple of each number until you write a multiple that exists from both numbers.

An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ...
and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

This problem can be confusing because most people look for the smallest common multiple of just the two numbers but forget the keyword range.
However, this means that if you are given [1,5],
then you have to check for the smallest common multiple for all the numbers [1,2,3,4,5] that is evenly divisible by all of them.

==========CODE EXPLANATION=====================
The first, basic solution requires over 2,000 loops to calculate the test case smallestCommons([1,13]), and over 4 million loops to calculate smallestCommons([1,25]). This solution evaluates smallestCommons([1,13]) in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
Make an empty array range.
All numbers between the given range are pushed to range using a for loop.
The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.

==========================================
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
The answer here would be 6.

1. smallestCommons([1, 5]) should return a number.
2. smallestCommons([1, 5]) should return 60.
3. smallestCommons([5, 1]) should return 60.
4. smallestCommons([2, 10]) should return 2520.
5. smallestCommons([1, 13]) should return 360360.
6. smallestCommons([23, 18]) should return 6056820.
*/
