function repeatStringNumTimes(str, num) {
  // repeat after me
  let copy = [];
  let temp = "";

  if(num > 0){
    for (let i=1;i<num;i++){
      temp = temp + str;
    }

    str = str + temp;

    return str;
  } else {
    return "";
  }


}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", -23));

/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

1. repeatStringNumTimes("*", 3) should return "***".
2. repeatStringNumTimes("abc", 3) should return "abcabcabc".
3. repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
4. repeatStringNumTimes("abc", 1) should return "abc".
5. repeatStringNumTimes("*", 8) should return "********".
6. repeatStringNumTimes("abc", -2) should return "".
7. The built-in repeat()-method should not be used
*/
