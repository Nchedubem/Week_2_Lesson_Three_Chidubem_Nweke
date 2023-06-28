
// Create an object with personal information
var person = {
    name: "Chidubem Nwachinemere",
    age: 30,
    city: "Anambra",
    occupation: "Web Engineer"
  };
  
  for (var key in person) {
    if (person.hasOwnProperty(key)) {
      // Log the key-value pair to the console
      console.log(key + ": " + person[key]);
    }
  }
