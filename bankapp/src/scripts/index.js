import {Account} from "./account.js"

const checkingAccount = new Account(acctName.value, 0);
let newUser = {};
let createAcct = document.getElementById("createAcct");
createAcct.addEventListener("click", newCard, newAccount);

function newCard() {
const div = document.createElement("div");
div.classList.add("clAcctCard");
div.id = "acctCard";
const name = document.createTextNode("acctName.value");
div.appendChild(name);

const type = document.createTextNode("acctType.value");
div.appendChild(type);

const bal = document.createTextNode("this.balance");
div.appendChild(bal);
document.getElementById("acctInfo").appendChild(div);
}

function newAccount() {
    console.log("testing new acct");
    console.log(Object.keys(newUser));
    // ---------- USER DOES NOT EXIST AND HAS NO ACCOUNT ----------
if (Object.keys(newUser).includes("name") === false) {
    newUser.name = acctName.value;
    newUser.balance = 0;
}
}