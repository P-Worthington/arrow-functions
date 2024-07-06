/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);

// Arrow Function With Parameters
const addTwoNumbersArrow = (a, b) => {
    return a + b
}
let arrowSum = addTwoNumbersArrow (3, 5)

// Single Line Arrow Function With Parameters
const addTwoNumbersArrowSingle = (a, b) => a + b;
//const addTwoNumbersArrowSingle = (a, b) => (a + b); // also valid

// Implicit Returns
const saySomething = message => console.log(message) // single parameter no need for ()

const sayHello = () => console.log('hello') // empty parameters needed

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a paragraph
    </p>`

)
// () needed on multiline returns