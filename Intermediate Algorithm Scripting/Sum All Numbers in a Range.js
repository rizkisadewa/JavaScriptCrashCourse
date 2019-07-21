function sumAll(arr) {
  var arrMax = Math.max(arr[0], arr[1]);
  var arrMin = Math.min(arr[0], arr[1]);
  var temp = 0;

  for(let i=arrMin;i<=arrMax;i++){
    temp += i;
  }

  return(temp);
}

console.log(sumAll([1, 9]));

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

1. sumAll([1, 4]) should return a number.
2. sumAll([1, 4]) should return 10.
3. sumAll([4, 1]) should return 10.
4. sumAll([5, 10]) should return 45.
5. sumAll([10, 5]) should return 45.
*/
