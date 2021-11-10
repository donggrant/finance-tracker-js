function Transaction(name, purchase_date, amount) {
    this.name = name;
    this.purchase_date = purchase_date;
    this.amount = amount;
}
 
var balance = 0;

/*
// Write Zombie as JSON
document.write(JSON.stringify(zombie2));

// Take a look at what happens when we stringify then parse
var jsonZombie = JSON.stringify(zombie2);
var zombie3 = JSON.parse(jsonZombie);

// note zombie3 is not a Zombie and does not have the
// intro() method.

// Read from local storage
// var jsonFromStorage = localStorage.getItem("zombie");

function saveZombie() {
    localStorage.setItem("zombie", JSON.stringify(zombie2));
}
*/

function update_balance(amount) {
    balance += amount;
    document.getElementById("balance").innerHTML = "Balance: " + balance;
}
