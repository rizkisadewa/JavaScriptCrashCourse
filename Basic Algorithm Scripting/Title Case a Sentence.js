function titleCase(str) {

  var resultArr = [];

  for(let i=0;i<str.split(" ").length;i++){

    var initialWord = str.split(" ")[i].toLowerCase();
    var firstChar = initialWord[0].toUpperCase();

    let replacedRegex = initialWord[0];

    var resultTemp = initialWord.replace(replacedRegex, firstChar);

    resultArr.push(resultTemp);

  }

  return resultArr.join(" ");

}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

1. titleCase("I'm a little tea pot") should return a string.
2. titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
3. titleCase("sHoRt AnD sToUt") should return Short And Stout.
4. titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/
