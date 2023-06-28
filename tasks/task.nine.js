// Create an array of names
var names = ["Alice", "ncheta", "Charlie", "David", "Eve"];

// Using forEach() to log each name to the console
console.log("Using forEach():");
names.forEach(function(name) {
  console.log(name);
});

// Using map() to create a new array with uppercase names
console.log("\nUsing map():");
var uppercaseNames = names.map(function(name) {
  return name.toUpperCase();
});
console.log(uppercaseNames);

// Using filter() to create a new array with names containing more than 4 characters
console.log("\nUsing filter():");
var longNames = names.filter(function(name) {
  return name.length > 4;
});
console.log(longNames)