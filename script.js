let user = prompt("What is your name?");
let welcome = alert(`Welcome, ${user}! `);
let pin = prompt("Enter your 4-digit PIN (Your default PIN is 1234)");
let bal = 1000;
    
if (pin === "1234") {
    let options = prompt(`Hello ${user}, what would you like to do?
    1. Balance      2. Withdrawal
    3. Transfer     4. Deposit
 `);
        
    if (options === "1") {
        alert(`Congratulations ${user}, your Balance is NGN ${bal}.`);
    } else if (options === "2") {
        let withdraw = prompt("How much would you like to Withdraw?");
        if (!isNaN(withdraw)) {
            alert(`Congratulations ${user}, your Withdrawal of NGN ${withdraw} was successful.`);
    } else {
        alert("Invalid input. Please enter a valid number.");
        }
    } else if (options === "3") {
        let accountNumber = prompt("Input recipient's account number:");
        let num = prompt("How much would you like to send?")
        if (!isNaN(accountNumber)) {
            alert(`Congratulations ${user}, your transfer of NGN ${num} to account number ${accountNumber} was successful.`);
         } else {
                alert("Invalid input. Please enter a valid account number.");
            }
    }else if (options === "4") {
        let deposit = prompt("How much would you like to deposit?");
        if (!isNaN(deposit)) {
            alert(`Congratulations ${user}, your deposit of NGN ${deposit} was successful.`);
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
        } else {
            alert("Invalid option selected.");
        }
} else {
        alert("Please input correct PIN and try again.");
    }