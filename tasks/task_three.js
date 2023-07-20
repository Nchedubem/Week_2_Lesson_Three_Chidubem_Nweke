
let person = {
    name: "Chidubem Nwachinemere",
    age: 30,
    city: "Anambra",
    occupation: "Web Engineer"
  };
  
  for (let key in person) {
    if (person.ownHisProperty(key)) {
      
      console.log(key + ": " + person[key]);
    }
  }
