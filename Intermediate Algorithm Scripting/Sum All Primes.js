function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
    for(let i=2;i<=number;i++){
      if(number % i === 0 && number != i){
        // return true if it is divisible by any number that is not itself
        return false;
      }
    }

    // if it is passes for loops conditions it is a prime
    return true;
  }

  // 1 is not a prime, so return nothing , also stop recursing calls.
  if(num===1){
    return 0;
  }

  // Check if number is not prime
  if(isPrime(num)===false){
    // for non primes check the next number down from your maximum number ,
    // do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // check if your number is prime
  if(isPrime(num) === true){
    // for primes add that number to the text number in the sequence through
    // a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

/*
===========PROBLEM EXPLANATION============
The explanation for this problem is very simple. You will generate a list of prime numbers up to the number you are given as a parameter.
Then you need to add them all up and return that value. The tricky part is on generating the list of prime numbers.
 I suggest you find a code or a good math algorithm that you can turn into code.

 ==========CODE EXPLANATION================

    The function isPrime checks if a particular number is prime or not.
    If num is 1, return 0 since 1 is not a prime number.
    If num is not prime, check next number down from maximum number.
    If num is prime, add it to next number in the sequence through recursion to sumPrimes function.
==========================================

    Sum all the prime numbers up to and including the provided number.

    A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

    The provided number may not be a prime.

1. sumPrimes(10) should return a number.
2. sumPrimes(10) should return 17.
3. sumPrimes(977) should return 73156.


*/
