let balance = 0;

const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");
const historyList = document.getElementById("historyList");

function updateBalance(){
    balanceDisplay.innerText = "₹" + balance;
}

function addMoney(amount){

    balance += amount;

    updateBalance();
    message.innerText = "";

    addHistory("Deposited ₹" + amount);
}

function withdrawMoney(){

    const withdrawInput = document.getElementById("withdrawAmount");
    const amount = parseInt(withdrawInput.value);

    if(isNaN(amount) || amount <= 0){
        message.innerText = "Enter a valid amount";
        return;
    }

    if(balance >= amount){

        balance -= amount;
        updateBalance();
        message.innerText = "";

        addHistory("Withdrew ₹" + amount);

    } else {

        message.innerText = "Insufficient Balance";

    }

    withdrawInput.value = "";
}

function addHistory(text){

    const li = document.createElement("li");
    li.innerText = text;

    historyList.prepend(li);
}