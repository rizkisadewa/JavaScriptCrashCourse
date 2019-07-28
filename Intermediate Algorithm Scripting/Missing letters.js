function fearNotLetter(str) {
  for(let i=1; i<str.length;i++){
    if(str.charCodeAt(i) - str.charCodeAt(i-1)>1){
      return String.fromCharCode(str.charCodeAt(i-1)+1);
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/*
======PROBLEM EXPLANATION========
You will create a program that will find the missing letter from a string and return it.
If there is no missing letter, the program should return undefined.
There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used.
Also, the letters are always provided in order so there is no need to sort them.



=========CODE EXPLANATION==========

    Loop over the string
    Check if the difference in char codes between adjacent characters in the string is more than 1 (chack ASCII table)
    Return the missing character ( +1 from where the gap was detected)

==================================

1. fearNotLetter("abce") should return "d".
2. fearNotLetter("abcdefghjklmno") should return "i".
3. fearNotLetter("stvwx") should return "u".
4. fearNotLetter("bcdf") should return "e".
5. fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/
