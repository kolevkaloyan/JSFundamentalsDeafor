// Write a program that asks the user to enter their birth year and then calculates their age based on the current year.
//To do this, you will need to use the number data type, the Date object, and some basic math operations in JavaScript.

function CalculateAge() {
  //take the input from the user
  const birthDate = prompt("What is your date of birth(year-month-day): ");
  //split the date into year, month and day
  let [birthYear, birthMonth, birthDay] = birthDate.split("-");

  //get the current date
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // + 1 because it returns the index
  const currentDay = now.getDay();

  //first we calculate the age only based on the year
  let currentAge = currentYear - birthYear;

  if(currentMonth < birthMonth){
    //if the current month is before the birth month then we subtract one
    currentAge--;
  } else if(currentMonth === birthMonth){
    //if the months are teh same then we check the day
    if (currentDay < birthDay) {
        // If the current day is before the birth day we subtract 1 
        currentAge--;
      }
  }

  console.log("Your current age is: " + currentAge);
}

CalculateAge();

const person = {
    name: 'Kaloyan',
    age: 23,
    surname: 'test'
}

const asd = {...person, surname: 'sda'}
