function binaryAgent(str) {
  var biString = str.split(' ');
  var uniString = [];

  /*
    using the radix (or base) parameter in parseInt, we can convert the binary.
    number to decimal number while simultaneously converting to a char
  */

  for(let i=0;i<biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));

  }

  // we then simply join the string
  return uniString.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

/*
=======CODE EXPLANATION=============


    Separate the string into an array of strings separated by whitespace.
    Create some variables that will be needed along the way, the names are self explanatory for the most part.
    Iterate through each binary string in the new array.
    Convert to decimal by using parseInt(binary, 2) (with the second parameter we tell in which base our numbers currently are)
    At the end, we return out converted message.
====================================

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

1. binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
2. binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"

*/
