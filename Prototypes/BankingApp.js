// Task: Build a Simple Banking Application using Prototypes
// You are required to build a simple banking application using prototypes in JavaScript.
//The application should allow users to create bank accounts, deposit and withdraw money from their accounts.
// Each account should have a balance, and the application should perform validation checks
//to ensure that users cannot withdraw more money than they have in their accounts.
// Here are the steps to follow:
// Create a prototype for a bank account. The prototype should contain a constructor that accepts an initial balance,
// and methods for depositing and withdrawing money.
// Use the prototype to create new bank accounts.
// Implement validation checks to ensure that users cannot withdraw more money than they have in their accounts.
// Create a user interface for the banking application using HTML and CSS.
// Use JavaScript to handle user input and update the user interface to reflect the current state of the bank accounts.
// Test the application to ensure that it works as expected.

class bankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  doposit(amount) {
    this.balance += Number(amount, 2);
    console.log(`Your balance is: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient Funds");
    } else {
      this.balance -= Number(amount);
      console.log(`Your balance is: ${this.balance}`);
    }
  }

  getBalance() {
    return this.balance.toFixed(2);
  }
}
//a function that updates the balance presented to the user after each transaction
function updateBalance() {
  balanceEl.textContent = myAccount.getBalance();
  amountEl.value = "";
}

//take all the elements from the html page
const balanceEl = document.getElementById("balance");
const amountEl = document.getElementById("amount");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");

//create a new instance of the bank account
const myAccount = new bankAccount(1000);

//attach event listeners to the buttons
depositBtn.addEventListener("click", () =>  {
  const amount = Number(amountEl.value).toFixed(2);
  if (amount === NaN || amount < 0) {
    alert("Please enter a valid amount to deposit.");
  } else {
    myAccount.doposit(amount);
    updateBalance();
  }
});

withdrawBtn.addEventListener("click", () => {
  const amount = Number(amountEl.value).toFixed(2);
  if (amount === NaN || amount > Number(balanceEl.innerHTML)) {
    alert("нема бизнес,нема пари");
  } else {
    myAccount.withdraw(amount);
    updateBalance();
  }
});

console.log(depositBtn)
