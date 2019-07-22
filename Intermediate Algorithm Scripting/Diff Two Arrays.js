function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
      item => !arr1.includes(item) || !arr2.includes(item)
    );
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] ));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] ));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

1. diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
2. ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
3. ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
4. ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
5. ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
6. ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
7. ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
8. [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
9. [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
10. [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
11. [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
12. [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
13. [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
14. [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
15. [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/
