function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(bool === true || bool === false){
    return true;
  } else {
    return false;
  }
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1,2,3]));

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

1. booWho(true) should return true.
2. booWho(false) should return true.
3. booWho([1, 2, 3]) should return false.
4. booWho([].slice) should return false.
5. booWho({ "a": 1 }) should return false.
6. booWho(1) should return false.
7. booWho(NaN) should return false.
8. booWho("a") should return false.
9. booWho("true") should return false.
10. booWho("false") should return false.
*/
