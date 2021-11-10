function Transaction(name, purchase_date, amount) {
    this.name = name;
    this.purchase_date = purchase_date;
    this.amount = amount;
}
 
var balance = 0;
var transactions = [];

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
*/
function save_transactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function load_transactions() {
    var result = localStorage.getItem("transactions");
    if (result !== null) {
        transactions = JSON.parse(result);
    }
    // update balance with all amounts in transactions
}


function update_balance(amount) {
    balance += amount;
    document.getElementById("balance").innerHTML = "Balance: " + balance;
}

