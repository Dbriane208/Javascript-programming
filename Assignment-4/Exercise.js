/*
1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student).join(","));

/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/
delete student.rollno;

console.log("After deleting rollno:", student);

/*
3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/

console.log("Student object length is :", Object.keys(student).length);

/*
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
*/
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach((book) => {
  console.log("Book:", book.title);
  console.log("Author:", book.author);
  console.log("Reading status:", book.readingStatus);
});

/*
5. Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
*/

function getSubsets(str) {
  let subsets = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subsets.push(str.substring(i, j));
    }
  }
  return subsets;
}

console.log(getSubsets("dog"));

/*
6. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
   Expected Output:[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]
*/

var libraryTwo = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

// sorting the object items in descending order
libraryTwo.sort((a, b) => {
  return b.libraryID - a.libraryID;
});

console.log(libraryTwo);

/*
7. Write a JavaScript function to print all the methods in a JavaScript object.
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
*/

function all_properties(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] === "function";
  });
}

console.log(all_properties(Array));

/*
9. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
*/

function getAllProperties(obj) {
  let properties = [];
  for (let prop in obj) {
    properties.push(prop);
  }
  return properties;
}

console.log(getAllProperties(Object.prototype));

/*
10. Write a JavaScript function to retrieve all the values of an object's properties.
*/

function getAllValues(obj) {
  return Object.values(obj);
}

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(getAllValues(student));

/*
11. Write a JavaScript function to convert an object into a list of [key, value] pairs.
*/

function objectToPairs(obj) {
  return Object.entries(obj);
}

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(objectToPairs(student));

/*
12. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
*/

function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(invertObject(student));

/*
13. Write a JavaScript function to check whether an object contains a given property.
*/

function hasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(hasProperty(student, "rollno"));
console.log(hasProperty(student, "age"));
