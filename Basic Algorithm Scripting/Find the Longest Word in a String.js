function findLongestWordLength(str) {

  let result = 0;
  for(let i=0; i < str.split(' ').length; i++){
    if(str.split(' ')[i].length > result){
      result = str.split(' ')[i].length;
    }
  }

  return result;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

1. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
2. findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
3. findLongestWordLength("May the force be with you") should return 5.
4. findLongestWordLength("Google do a barrel roll") should return 6.
5. findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
6. findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
*/
