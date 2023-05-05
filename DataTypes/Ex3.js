// Create a program that asks the user to enter their name and age, and then prints out a message that says 
//"Hello, [name]! You are [age] years old." To accomplish this, you will need to use the string and number data types in JavaScript.


function nameAndAge(){
    const name = prompt('What is your name? ');
    const age = prompt('How old are you');

    console.log(`Hello, ${name}! You are ${age} years old.`);
}

nameAndAge();