#! /usr/bin/env node 

import inquirer from "inquirer";
async function my_Bank() {
    let mybalance = 70000;
    let myPinCode = 32361055;
    let PinAns = await inquirer.prompt([
        {
            name: 'pin',
            type: 'number',
            message: '\n\nEnter your PinCode:',
        }
    ]);
    if (PinAns.pin == myPinCode) {
        console.log("\nCorrect Pincode !!\n");
        let OptionsAns = await inquirer.prompt([
            {
                name: 'option',
                type: 'list',
                message: '\n\nPlease select option from below:',
                choices: ['Withdraw', 'Check_balance', 'Fast_cash'],
            },
        ]);
        if (OptionsAns.option === 'Withdraw') {
            let AmountAns = await inquirer.prompt([
                {
                    name: 'amount',
                    type: 'number',
                    message: '\nEnter your Amount:',
                }
            ]);
            if (AmountAns.amount < mybalance) {
                mybalance -= AmountAns.amount;
                console.log(`Your current balance is ${mybalance}.`);
            }
            else {
                console.log(`\nNot enough balance...\n`);
            }
        }
        else if (OptionsAns.option === 'Check_balance') {
            console.log(`\nYour Current balance is ${mybalance}.\n`);
        }
        else if (OptionsAns.option === 'Fast_cash') {
            let FastcashAmountAns = await inquirer.prompt([
                {
                    name: 'fastcashamount',
                    type: 'list',
                    message: '\nEnter your Fast_Cash_Amount:',
                    choices: [40000, 50000, 30000],
                }
            ]);
            if (FastcashAmountAns.fastcashamount < mybalance) {
                if (FastcashAmountAns.fastcashamount === 40000) {
                    mybalance -= FastcashAmountAns.fastcashamount;
                    console.log(`\nYour current balance is ${mybalance}.`);
                }
                else if (FastcashAmountAns.fastcashamount === 50000) {
                    mybalance -= FastcashAmountAns.fastcashamount;
                    console.log(`Your current balance is ${mybalance}.`);
                }
                else if (FastcashAmountAns.fastcashamount === 30000) {
                    mybalance -= FastcashAmountAns.fastcashamount;
                    console.log(`Your current balance is ${mybalance}.`);
                }
            }
            else {
                console.log(`\nNot enough balance...\n`);
            }
        }
    }
    else {
        console.log(`\nPlease enter valid Pincode...\n`);
    }
}
my_Bank();
