// 2. Create a program that takes a string of text and counts the number of occurrences of a specific letter in the string.
//To accomplish this, you will need to use the string data type and some basic looping and conditional statements in JavaScript.

function LetterOccurance() {
  //take input from the user
  const userText = prompt("Place your text here: ");

  const userLetter = prompt("Pick a letter: ");

  //add a counter to for the letter
  let counter = 0;

  //iterate through the string text
  for (let i = 0; i < userText.length; i++) {
    if (userLetter === userText.charAt(i)) {
      counter++;
    }
  }
  //print the output 
  console.log(`The letter "${userLetter}" occurs ${counter} times in the text.`);
}

LetterOccurance();
