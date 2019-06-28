function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9 / 5 + 32;

  return fahrenheit;
}

console.log(convertToF(30));

/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined
and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.

1. convertToF(0) should return a number
2. convertToF(-30) should return a value of -22
3. convertToF(-10) should return a value of 14
3. convertToF(0) should return a value of 32
4. convertToF(20) should return a value of 68
5. convertToF(30) should return a value of 86
*/
