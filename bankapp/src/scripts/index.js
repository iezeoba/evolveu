import { Account } from "./account.js"

const checkingAccount = new Account(acctName.value, 0);
let newUser = {};
let createAcct = document.getElementById("createAcct");
createAcct.addEventListener("click", newCard, newAccount);

function newCard() {
    console.log("seeee");
    const div = document.createElement("div");
    div.id = "acctCard";
    div.classList.add("clAcctInfoCard");

    const name = document.createElement("p");
    name.id = "idName"; 
    name.textContent = "Name: " + acctName.value;
    div.append(name);

    const type = document.createElement("p");
    type.id = "idType";
    type.textContent = "Type: " + dropdown.value;
    name.append(type);

    const balance = document.createElement("p");
    balance.id = "idBal";
    balance.textContent = "Balance: " + 0.00;
    type.append(balance);

    document.getElementById("acctCard").appendChild(div);
}

function newAccount() {
    console.log("testing new acct");
    console.log(Object.keys(newUser));
    // ---------- USER DOES NOT EXIST AND HAS NO ACCOUNT ----------
    if (Object.keys(newUser).includes("name") === false) {
        if (dropdown.value == "Checking Account") {
            newUser.name = acctName.value; //"name" key is declared here on the fly to represent the "name" prop (from the constructor) and initialized with the user input from "acctName.value".
            newUser.CheckingAccount = 0; //"checkingAccount" key is declared here on the fly to represent the "balance" prop (from the constructor) and initialized with a value of zero. It also references the particular instance of {Account}.
        } else if (dropdown.value == "Savings Account") {
            newUser.name = acctName.value;
            newUser.SavingsAccount = 0;
        } else if (dropdown.value == "Credit Card") {
            newUser.name = acctName.value;
            newUser.CreditCard = 0;
        } else if (dropdown.value == "RESP Account") {
            newUser.name = acctName.value;
            newUser.RESPAccount = 0;
        } else {
            newUser.name = acctName.value;
            newUser[`${dropdown.lastChild.value}`] = 0; // newUser
        }
    }
    // ---------- USER EXISTS AND HAS AN ACCOUNT ---------- 
    else if (Object.keys(newUser).includes("name") && (newUser.name == acctName.value)) {
        if ((Object.keys(newUser).includes("CheckingAccount") === true) && (dropdown.value === "Checking Account")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("CheckingAccount") === false) && (dropdown.value === "Checking Account")) {
            newUser.CheckingAccount = 0;
        }
        if ((Object.keys(newUser).includes("SavingsAccount") === true) && (dropdown.value === "Savings Account")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("SavingsAccount") === false) && (dropdown.value === "Savings Account")) {
            newUser.SavingsAccount = 0;
        }
        if ((Object.keys(newUser).includes("CreditCard") === true) && (dropdown.value === "Credit Card")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("CreditCard") === false) && (dropdown.value === "Credit Card")) {
            newUser.CreditCard = 0;
        }
        if ((Object.keys(newUser).includes("RESPAccount") === true) && (dropdown.value === "RESP Account")) {
            alert("User account already exists");
        } else if ((Object.keys(newUser).includes("RESPAccount") === false) && (dropdown.value === "RESP Account")) {
            newUser.RESPAccount = 0;
        }
    }
    updateDisplay();
};

function updateDisplay() {
    if (Object.keys(newUser).includes("CheckingAccount")) {
        idName.value = newUser.name;
        idType.value = dropdown.value;
        idBal.value = newUser.CheckingAccount;
    }
    // else if (Object.keys(newUser).includes("SavingsAccount")) {
    //     savingsAcc.value = newUser.SavingsAccount;
    // }
    // else if (Object.keys(newUser).includes("CreditCard")) {
    //     creditCard.value = newUser.CreditCard;
    // }
    // else if (Object.keys(newUser).includes("RESPAccount")) {
    //     respAcc.value = newUser.RESPAccount;
    // }
}
