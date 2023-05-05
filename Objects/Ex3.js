// Create a program that simulates a bank account using an object with properties for account number, balance, and account holder name.
// Then, write methods for depositing and withdrawing money from the account, and print out the balance after each transaction.
//defining a bank account object
const bankAccount = {

    accountNumber: 12345,
    balance: 10_000,
    accountHolder: 'Kaloyan',

    //method for deposits
    deposit: function(amount){
        this.balance += parseInt(amount);
        console.log(`Your balance is: ${this.balance}`)
    },

    //method for withdrawing
    withdraw: function(amount){
        if (amount > this.balance){
            console.log('Insufficient Funds')
        } else {
            this.balance -= parseFloat(amount);
            console.log(`Your balance is: ${this.balance}`)
        }
    }
}

bankAccount.deposit(1000); 
bankAccount.withdraw(11000); 
bankAccount.withdraw(5);