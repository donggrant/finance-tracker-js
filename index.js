function Transaction(name, purchase_date, amount) {
    this.name = name;
    this.purchase_date = purchase_date;
    this.amount = amount;
}
 
var balance = 0;
var transactions = [];

function save_transactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function load_transactions() {
    var result = localStorage.getItem("transactions");
    if (result !== null) {
        transactions = JSON.parse(result);
    }
    // update balance with all amounts in transactions
    transactions.forEach((transaction) => update_balance(transaction.amount)); 
     
    display_transactions(); 
}   

function display_transactions() {
    var body = document.getElementById("transaction_body");
    for(var i = 0; i < transactions.length; i++) {
        var transaction = transactions[i];

        var row = document.createElement("tr");
    
        var name = document.createElement("td");
        var name_text = document.createTextNode(transaction.name);

        var purchase_date = document.createElement("td");
        var purchase_date_text = document.createTextNode(transaction.purchase_date);

        var amount = document.createElement("td");
        var amount_text = document.createTextNode(transaction.amount);

        var amount = document.createElement("td");
        var amount_text = document.createTextNode(transaction.amount);

        var del = document.createElement("td");
        var delete_button = document.createElement("button");
        delete_button.className = "btn btn-danger";
        delete_button.value = "delete";
        delete_button.onclick = (function(index) {return function() {delete_transaction(index);}})(i);

        name.appendChild(name_text);
        row.appendChild(name);

        purchase_date.appendChild(purchase_date_text);
        row.appendChild(purchase_date);
        
        amount.appendChild(amount_text);
        row.appendChild(amount);

        del.appendChild(delete_button);
        row.appendChild(del);

        body.appendChild(row);
    }
}

const form  = document.getElementById('new_transaction');
form.addEventListener('submit', (event) => {
    var name = form.elements["name"].value;
    var date = form.elements["date"].value;
    var amount = form.elements["amount"].value;
    if (form.elements["type"].value === "debit"){
        amount *= -1;
    }
    var transaction = new Transaction(name, date, amount);
    transactions.push(transaction); 
});
 

document.getElementById("clear").addEventListener("click", (event) => {
    transactions = []; 
    window.location.reload();
});

function delete_transaction(index) {
    transactions.splice(index, 1);
    window.location.reload();
}

function update_balance(amount) {
    var curr_balance = parseInt(balance);
    curr_balance += parseInt(amount);
    balance = curr_balance;
    document.getElementById("balance").innerHTML = "Balance: " + balance;
}

