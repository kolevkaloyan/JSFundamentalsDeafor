// 1. Create an object that represents a person, with properties for their name, age, and occupation.
// Then, print out a message that says "My name is [name], I am [age] years old, and I work as a [occupation]."
function myNameIs() {
  const person = {
    name: "Kaloyan",
    age: 23,
    occupation: "programmer",
  };

  console.log(`My name is ${person.name}, I am ${person.age} years old, and I work as a ${person.occupation}`);
}

myNameIs()
