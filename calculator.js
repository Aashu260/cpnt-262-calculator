"use strict";

//define operators
let operators = ["+", "-", "*", "/"];

// using process.argv to access the arguments
const args = process.argv.slice(2);

// keys and values within the object
const operations = {
    '+' : addition,
    '-' : subtraction,
    '*' : multiplication,
    '/' : division
};

// Three arguments
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

// making sure correct number and type of arguments are provided.
if (args.length !== 3) {
    console.error("Provide valid arguments. Ex: 2 + 3");
    process.exit(1);
  }

// Error handling potential errors related to invalid input.
if (isNaN(num1) || isNaN(num2)) {
    console.error("Please provide valid numbers");
    process.exit(1);
  }

if (!operators.includes(operator)) {
    console.error("The operator must be: +, -, *, or / ");
    return;
  }

// functions 

// for addition
function addition(num1,num2){
    return num1 + num2;
}

// for subtraction
function subtraction(num1,num2){
    return num1 - num2;
}

// for multiplication
function multiplication(num1,num2){
    return num1 * num2;
}

// for division - if else statement handle error (division by zero)
function division(num1,num2)
{
    if (operator === "/" && num2 === 0) {
    return "Division by 0 is not possible";
} else {
    return num1 / num2;
}
}

// displaying the result

const result = operations[operator](num1,num2);
console.log(`Result: ${result}`);