function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // Insertion sorting
  const len = arr.length;
  for(let i=0;i<len;i++){
    let el = arr[i];
    let j;

    for(j=i-1;j>=0&&arr[j]>el;j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = el;
  }

  // Checking the index;
  var i = 0;
  while(i < arr.length){
    if(arr[i] >= num){
      return i;
    }

    i++;
  }

  return arr.length;

}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)
and greater than 5 (index 1).

1. getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
2. getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
3. getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
4. getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
5. getIndexToIns([40, 60], 50) should return 1.
6. getIndexToIns([40, 60], 50) should return a number.
7. getIndexToIns([3, 10, 5], 3) should return 0.
8. getIndexToIns([3, 10, 5], 3) should return a number.
9. getIndexToIns([5, 3, 20, 3], 5) should return 2.
10. getIndexToIns([5, 3, 20, 3], 5) should return a number.
11. getIndexToIns([2, 20, 10], 19) should return 2.
12. getIndexToIns([2, 20, 10], 19) should return a number.
13. getIndexToIns([2, 5, 10], 15) should return 3.
14. getIndexToIns([2, 5, 10], 15) should return a number.
15. getIndexToIns([], 1) should return 0.
16. getIndexToIns([], 1) should return a number.
*/
