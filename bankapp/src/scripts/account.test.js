import {Account} from "./account.js";
//import Account from "./account.js"; //this import fails bcos the Account class is not wrapped in {} brackets

const checkingAccount = new Account ("Simon Dean", 25);

test("Testing balance", () => {
    expect(checkingAccount.balance).toBe(25);
});

test("Testing deposit", () => {    
    expect(checkingAccount.deposit(10)).toBe(Number(35).toFixed(2)); 
    expect(checkingAccount.deposit(-5)).toBe("Amount entered is negative");
    console.log(checkingAccount.balance);
    expect(checkingAccount.deposit(50)).toBe(Number(85).toFixed(2));  
});

test("Testing withdraw", () => {
     expect(checkingAccount.withdraw(80)).toBe(Number(5).toFixed(2));
     console.log(checkingAccount.balance);
     expect(checkingAccount.withdraw(-50)).toBe("Amount is negative");
     expect(checkingAccount.withdraw(1250)).toBe("Insufficient balance");
});