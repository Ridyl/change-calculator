// User Inputs
let amountDue = document.getElementById("amount-due");
let amountRec = document.getElementById("amount-received");

// Calc Button
let calcButton = document.getElementById("calculate-change");

// Output Areas
let dollarOut = document.getElementById("dollars-output");
let quarterOut = document.getElementById("quarters-output");
let dimeOut = document.getElementById("dimes-output");
let nickelOut = document.getElementById("nickels-output");
let pennyOut = document.getElementById("pennies-output");

// Handles button press and function delegation
calcButton.onclick = calculationButtonHandler;

function calculationButtonHandler() {
    // Checks that an amount has been placed in each input field.
    if (amountDue && amountDue.value && amountRec && amountRec.value) {
        calculationDistributor(amountDue.value, amountRec.value);
    } else {
        console.log("Values not placed");
    }
}

function calculationDistributor(due, rec) {
    let change = rec - due;

    if (change > 0) {
        dollar(change);
    } else {
        console.log(`Customer owes ${Number(change.toFixed(2))}.`);
    }
}

// functions are seperated for clarity. Each function does the math for each coin.
function dollar(change) {
    let dollar = Math.floor(change);
    dollarOut.textContent = `${dollar}`;

    quarter(change - dollar);
}

function quarter(change) {
    let quarter = Math.floor(change / 0.25);
    quarterOut.textContent = `${quarter}`;

    dime(change - (quarter * 0.25));
}

function dime(change) {
    let dime = Math.floor(change / 0.1);
    dimeOut.textContent = `${dime}`;

    nickel(change - (dime * 0.1));
}

function nickel(change) {
    let nickel = Math.floor(change / 0.05);
    nickelOut.textContent = `${nickel}`;

    penny(change - (nickel * .05));
}

function penny(change) {
    let penny = change / 0.01;
    console.log(penny);
    pennyOut.textContent = `${Math.round(penny)}`;
}


