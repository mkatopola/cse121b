/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers (){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
function Subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers (){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = Subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;
let divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
// Get the button element
let getTotal = document.querySelector("#getTotal");

// Add the event listener
getTotal.addEventListener("click", function() {
    // Get the value entered by the user in the "subtotal" field
    let subtotal = Number(document.querySelector("#subtotal").value);

    // Check if the membership checkbox has been checked
    let isMember = document.querySelector("#member").checked;

    // If the user is a member, apply a 20% discount
    if (isMember) {
        subtotal *= 0.80;
    }

    // Output the total to the "total" span with two decimals
    document.querySelector("#total").textContent = `$${subtotal.toFixed(2)}`;
});



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 !== 0);

// Assign the string to the HTML element with an ID of "odds"
document.querySelector("#odds").textContent = odds;

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let originalSum = numbersArray.reduce((a, b) => a + b);
document.querySelector("#sumOfArray").textContent = originalSum;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(a => a * 2);
document.querySelector("#multiplied").textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = numbersArray.map(a => a * 2).reduce((a, b) => a + b);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultipliedArray;
