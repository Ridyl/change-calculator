// User Inputs
let amountDue = document.getElementById("amount-due");
let amountRec = document.getElementById("amount-received");

// Calc Button
let calcButton = document.getElementById("calculate-change");

// Output Areas
let dollarOut = document.getElementById("dollars-output");
let twoOut = document.getElementById("two-output");
let fiveOut = document.getElementById("five-output");
let tenOut = document.getElementById("ten-output");
let twentyOut = document.getElementById("twenty-output");
let quarterOut = document.getElementById("quarters-output");
let dimeOut = document.getElementById("dimes-output");
let nickelOut = document.getElementById("nickels-output");
let pennyOut = document.getElementById("pennies-output");
let checkBox = document.getElementById("no-two");
let twoBox = document.getElementById("two");

// Handles button press and function delegation
calcButton.onclick = calculationButtonHandler;
checkBox.onclick = removeTwo;

function calculationButtonHandler() {
    // Checks that an amount has been placed in each input field.
    if (amountDue && amountDue.value && amountRec && amountRec.value) {
        calculationDistributor(amountDue.value, amountRec.value);
    } else {
        console.log("Values not placed");
    }
}

function calculationDistributor(due, rec) {
    let change = parseFloat(rec - due);

    if (change > 1) {
        bills(change);
    } else if (change > 0 && change < 1) {
        quarter(change);
    } else {
        console.log(`Customer owes ${Number(change.toFixed(2))}.`);
    }
}

// functions are seperated for clarity. Each function does the math for each coin.
function bills(change) {
    let wholeDollarAmount = Math.floor(change);
    twenty(wholeDollarAmount);
    
    function one(wholeDollarAmount) {
        let oneBill = Math.floor(wholeDollarAmount / 1);
        dollarOut.textContent = `${oneBill}`;
        wholeDollarAmount = change - wholeDollarAmount;

    }

    function two(wholeDollarAmount) {
        let twoBill = Math.floor(wholeDollarAmount / 2);
        twoOut.textContent = `${twoBill}`;
        wholeDollarAmount = wholeDollarAmount - (twoBill * 2);

        if (wholeDollarAmount >= 1) {
            one(wholeDollarAmount);
        } else {
            coins(change);
        }
    }

    function five(wholeDollarAmount) {
        let fiveBill = Math.floor(wholeDollarAmount / 5);
        fiveOut.textContent = `${fiveBill}`;
        wholeDollarAmount = wholeDollarAmount - (fiveBill * 5);

        if (checkBox.checked == true) {
            one(wholeDollarAmount);
        } else {
            two(wholeDollarAmount);
        }
    }

    function ten(wholeDollarAmount) {
        let tenBill = Math.floor(wholeDollarAmount / 10);
        tenOut.textContent = `${tenBill}`;
        wholeDollarAmount = wholeDollarAmount - (tenBill * 10);

        five(wholeDollarAmount);
    }

    function twenty(wholeDollarAmount) {
        let twtyBill = Math.floor(wholeDollarAmount / 20);
        twentyOut.textContent = `${twtyBill}`;
        wholeDollarAmount = wholeDollarAmount - (twtyBill * 20);

        ten(wholeDollarAmount);
    }
}

function coins(change) {
    let wholeDollarAmount = Math.floor(change);
    quarter((change - wholeDollarAmount).toFixed(2));

    function quarter(change) {
        let coin = parseFloat(change);
        let quarter = Math.floor(coin / 0.25);
        quarterOut.textContent = `${quarter}`;
    
        dime(coin - (quarter * 0.25));
    }
    
    function dime(coin) {
        let dime = Math.floor(coin / 0.1);
        dimeOut.textContent = `${dime}`;
    
        nickel(coin - (dime * 0.1));
    }
    
    function nickel(coin) {
        let nickel = Math.floor(coin / 0.05);
        nickelOut.textContent = `${nickel}`;
    
        penny(coin - (nickel * .05));
    }
    
    function penny(coin) {
        let penny = coin / 0.01;
        pennyOut.textContent = `${Math.round(penny)}`;
    }
}

function removeTwo() {
    if (checkBox.checked == true) {
        twoBox.style.display = "none";
    } else {
        twoBox.style.display = "";
    }
}




