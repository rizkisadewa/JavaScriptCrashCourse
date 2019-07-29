function convertHTML(str) {
  // Split by character to avoid problems

  var tempo = str.split('');

  // Since we are only checking for a few HTML elements I used a switch
  for(let i=0;i<str.length;i++){

    switch(tempo[i]){
      case '<':
        tempo[i] = '&lt;';
        break;

      case '&':
        tempo[i] = '&amp;';
        break;

      case '>':
        tempo[i] = '&gt;';
        break;

      case '"':
        tempo[i] = '&quot;';
        break;

      case "'":
        tempo[i] = '&apos;';
        break;
    }
  }

  tempo = tempo.join('');
  return tempo;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

/*
==========PROBLEM EXPLANATION============
You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.
=========================================
==========CODE EXPLANATION==============
Explain solution here and add any relevant links
Relevant Links

    str.split()
    arr.join()
    switch statement
=========================================
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

1. convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
2. convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
3. convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
4. convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
5. convertHTML("Schindler's List") should return Schindler&​apos;s List.
6. convertHTML("<>") should return &​lt;&​gt;.
7. convertHTML("abc") should return abc.
*/
