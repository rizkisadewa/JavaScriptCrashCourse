function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  var temp = [];

  for (let i=0;i<arr.length;i++){
    if(i%size != size - 1){
      temp.push(arr[i]);
    } else{
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  if(temp.length !== 0){
    result.push(temp);
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

1. chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
2. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
3. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
4. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
5. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
6. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
7. chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/
