function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair
  var paired = [];

  // Function to check with strand to pair
  var search = function(char){
    switch (char) {
      case 'A':
        paired.push(['A','T']);
        break;

      case 'T':
        paired.push(['T','A']);
        break;

      case 'C':
        paired.push(['C','G']);
        break;
      case 'G':
        paired.push(['G','C']);
    }
  };

  // Loop through the input and pair.
  for(var i=0;i<str.length;i++){
    search(str[i]);
  }

  return paired;


}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("CTCTA"));

/*
=========CODE EXPLANATION=============


    1. The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements.
    Using if statements would take too much code. you could also use Regular Expressions.
    2. Since we have to the original and the pair, I decided to take all four cases instead of the base two.
    3. Create an empty array and use the search function to push the right values to the array and return them.

======================================

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

1. pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
2. pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
3. pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/
