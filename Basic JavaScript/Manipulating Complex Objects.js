var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Michael Buble",
    "title": "Home",
    "release_year": 2005,
    "formats": [
      "CD",
      "Cassete",
      "LP"
    ]
  }
  // Add record here
];


/*
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

    var ourMusic = [
      {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
          "CD",
          "Cassette",
          "LP"
        ],
        "gold": true
      }
    ];

This is an array which contains one object inside. The object has various pieces of metadata about an album.
It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array.

Objects hold data in a property, which has a key-value format.
In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".

JavaScript Object Notation or JSON is a related data interchange format used to store data.

    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [
        "CD",
        "Cassette",
        "LP"
      ],
      "gold": true
    }

Note
You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

1. myMusic should be an array
2. myMusic should have at least two elements
3. myMusic[1] should be an object
4. myMusic[1] should have at least 4 properties
5. myMusic[1] should contain an artist property which is a string
6. myMusic[1] should contain a title property which is a string
7. myMusic[1] should contain a release_year property which is a number
8. myMusic[1] should contain a formats property which is an array
9. formats should be an array of strings with at least two elements
*/
