import Account from "./account.js";
//import {Account, AccountController} from "./account.js"; //can also import classes this way

const checkingAccount = new Account ("Simon Dean", 25);

test("Testing balance", () => {
    expect(checkingAccount.balance).toBe(5);
    //expect(checkingAccount.balance).toBe(25);
});

test("Testing deposit", () => {    
    expect(myAccount.deposit(50)).toBe(Number(250).toFixed(2)); 
    expect(myAccount.deposit(-50)).toBe("Amount entered is negative");
    expect(myAccount.deposit(500)).toBe(Number(750).toFixed(2));   
});

test("Testing _isAllowed", () => {
    expect(myAccount._isAllowed(50)).toBe(true);
    expect(myAccount._isAllowed(1550)).toBe(false);
});

test("Testing withdraw", () => {
     expect(myAccount.withdraw(50)).toBe(Number(700).toFixed(2));
     expect(myAccount.withdraw(-50)).toBe("Amount is negative");
     expect(myAccount.withdraw(1250)).toBe("Insufficient balance");
});

test("Testing transfer", () => {
    expect(myAccount.transfer(50)).toBe(Number(650).toFixed(2));
    expect(myAccount.transfer(-50)).toBe("Amount is negative");
    expect(myAccount.transfer(1250)).toBe("Insufficient balance");
});