export class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amt) {
        //let amount = parseFloat(amt);
        if (amt < 0) {
            // console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
            return "Amount entered is negative";
        } else return (this.balance += amt).toFixed(2);
    }

    withdraw(amt) {
        //let amount = parseFloat(amt);
        if (amt > 0 && this.balance - amt >= 0) {
            this.balance -= amt;
            // console.log(`Withdraw: ${this.name} new balance is ${this.balance}`);
            return (this.balance).toFixed(2);
        } else if (amt < 0) {
            return "Amount is negative"
        } else {
            return "Insufficient balance";
        }
    }

    balance() {
        return this.balance;
    }
};
// export {Account, AccountController}; //can also export classes this way