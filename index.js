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

const form  = document.getElementById('new_transaction');
form.addEventListener('submit', (event) => {
    var name = form.elements["name"];
    var date = form.elements["purchase_date"];
    var amount = form.elements["amount"];
    if (form.elements["type"] === "debit"){
        amount *= -1;
    }
    var transaction = new Transaction(name, date, amount);
    transaction.push(transaction);
    window.location.reload();
});

function clear_transactions() {
    transactions = [];
    window.location.reload();
}

function delete_transaction(index) {
    transactions.splice(index, 1);
    window.location.reload();
}


function update_balance(amount) {
    balance += amount;
    document.getElementById("balance").innerHTML = "Balance: " + balance;
}

