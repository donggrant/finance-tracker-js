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
    var table = document.getElementById("transaction_table");
    table.removeChild(table.getElementsByTagName("tbody")[0]);
    var body = document.createElement("tbody");
    for(var i = 0; i < transactions.length; i++) {
        var transaction = transactions[i];
        var row = document.createElement("tr");    
        for(const properties in transaction) {
            var property = document.createElement("td");
            var property_text = document.createTextNode(transaction[properties]);

            property.appendChild(property_text);
            row.appendChild(property);
        }

        var del = document.createElement("td");
        del.appendChild(delete_button(i));
        row.appendChild(del); 
        body.appendChild(row);
    }
    table.appendChild(body);
}

function delete_button(i) {
    var delete_button = document.createElement("button");
    delete_button.className = "btn btn-danger";
    delete_button.value = "delete";
    delete_button.onclick = (function(index) {return function() {delete_transaction(index);}})(i);

    return delete_button;
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
    display_transactions();
});

function delete_transaction(index) {
    transactions.splice(index, 1);
    display_transactions();
}

function update_balance(amount) {
    var curr_balance = parseInt(balance);
    curr_balance += parseInt(amount);
    balance = curr_balance;
    document.getElementById("balance").innerHTML = "Balance: " + balance;
}

