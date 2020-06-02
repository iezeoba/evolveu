import {Account} from "./account.js"

const checkingAccount = new Account(acctName.value, 0);
let newUser = {};
let createAcct = document.getElementById("createAcct");
createAcct.addEventListener("click", newCard, newAccount);

function newCard() {
const div = document.createElement("div");
div.id = "acctCard";
div.classList.add("clAcctInfoCard");

const name = document.createElement("p");
name.textContent = "Name: " + "acctName.value";
div.append(name);

const type = document.createElement("p");
type.textContent = "Type: " + "acctType.value" 
name.append(type);

const balance = document.createElement("p");
balance.textContent = "Balance: " + "this.balance" 
type.append(balance);

document.getElementById("acctCard").appendChild(div);
}

function newAccount() {
    console.log("testing new acct");
    console.log(Object.keys(newUser));
    // ---------- USER DOES NOT EXIST AND HAS NO ACCOUNT ----------
if (Object.keys(newUser).includes("name") === false) {
    newUser.name = acctName.value;
    newUser.balance = 0;
}
    // ---------- USER EXISTS AND HAS AN ACCOUNT ---------- 
    //  else if () {

    //  }
}