function translatePigLatin(str) {
  var regex = /[aieou]/gi;
  var pigLatin = '';

  if(str[0].match(regex)){
    pigLatin = str + 'way';
  } else if (str.match(regex) === null){
    pigLatin = str + 'ay';
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // take the string from the first vower to the last char
    // then add  the consonant that were previously omitted and add the ending
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

console.log(translatePigLatin("consonant"));

/*
========CDOE EXPLANATION===========

    1. Make an empty string to hold your Pig Latin word.
    2. Assign your appropriate regular expression to a variable.
    3. If the first character is a vowel, just add way to end of string and return it.
    4. If the first character is not a vowel:
        A. Find number of consonants before first vowel with help of indexOf(), match() and regex.
        B. Start Pig Latin string with first vowel till the end.
        C. Add letters before first vowel to end of string.
        D. substr() is used for string manipulation here.
        E. Add ay to end of string and return it.


===================================

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

1. translatePigLatin("california") should return "aliforniacay".
2. translatePigLatin("paragraphs") should return "aragraphspay".
3. translatePigLatin("glove") should return "oveglay".
4. translatePigLatin("algorithm") should return "algorithmway".
5. translatePigLatin("eight") should return "eightway".
6. Should handle words where the first vowel comes in the end of the word.
7. Should handle words without vowels.
*/
