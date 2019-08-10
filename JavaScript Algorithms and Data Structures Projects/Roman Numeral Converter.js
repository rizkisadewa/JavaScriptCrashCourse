function convertToRoman(num) {
 var decimal = [1000,900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

 var romanized = '';

 for(var index = 0;index < decimal.length; index++){
   while(decimal[index] <= num){
     romanized += romanValue[index];
     num -= decimal[index];
   }
 }

 return romanized;
}

console.log(convertToRoman(36));

/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

============CODE EXPLANATION================

    We start off by creating two arrays with default conversion with matching indices.
    These are called decimalValue and romanNumeral. We also create an empty string variable, romanized, which will house the final roman number.
    Using a for loop, we loop through the indicies of the decimalValue array.
    We continue to loop until while the value at the current index will fit into num.
    Next, we add the roman numeral and decrease num by the decimal equivalent.
    Finally, we return the value of romanized.

===========================================
1. convertToRoman(2) should return "II".
2. convertToRoman(3) should return "III".
3. convertToRoman(4) should return "IV".
4. convertToRoman(5) should return "V".
5. convertToRoman(9) should return "IX".
6. convertToRoman(12) should return "XII".
7. convertToRoman(16) should return "XVI".
8. convertToRoman(29) should return "XXIX".
9. convertToRoman(44) should return "XLIV".
10. convertToRoman(45) should return "XLV"
11. convertToRoman(68) should return "LXVIII"
12. convertToRoman(83) should return "LXXXIII"
13. convertToRoman(97) should return "XCVII"
14. convertToRoman(99) should return "XCIX"
15. convertToRoman(400) should return "CD"
16. convertToRoman(500) should return "D"
17. convertToRoman(501) should return "DI"
18. convertToRoman(649) should return "DCXLIX"
19. convertToRoman(798) should return "DCCXCVIII"
20. convertToRoman(891) should return "DCCCXCI"

*/
