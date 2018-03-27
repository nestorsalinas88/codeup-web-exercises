"use strict";



// function isNumeric(input) {
//     if(isNaN(parseFloat(input))){
//         return false;
//     }else {
//         return true;
//     }
// }
// var wantsToEnterNumber = confirm("would you like to enter a number?");
// if(wantsToEnterNumber){
//     var number = prompt("please enter a number!");
//     number = parseFloat(number);
//
//     if(!isNumeric(number)){
//         alert("You have to input a number yo!");
//     }else{
//         if(number % 2 == 0){
//             alert(number + " is even");
//         }else {
//             alert(number + " is odd");
//         }
//         alert(number + " plus 100 is: " + (100 + number));
//
//         if(number < 0){
//             alert(number + " is negative!");
//         } else if(number > 0){
//             alert(number + " is positive");
//         } else {
//             alert(number + " is neither positive or negative");
//         }
//     }
// }


    var insertNumber = confirm("Would you like to enter a number?");
    if(insertNumber === true){

    }
    var userInput = prompt("whats your favorite digits?");

    if (userInput % 2 === 0) {
        alert("Even!");
    } else if (userInput != parseInt(userInput)){
        alert("Dude this is not a number");
        return myFunction();
    }
    else {
        alert("Odd!")
    }

    alert(parseInt(userInput) + 100);

    confirm("Do you want to know if this number is neg or pos?");

    if (userInput < (-1)) {
        alert("negative");
    }else {
        alert("positive")
    }

    if (Number(userInput)) {
        alert("Congrats you know what a number is!");
    } else
        alert("This is an invalid statement!");


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//i will work on refactoring my code with fuctions

/* ########################################################################## */
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColour(input) {
    var message;


    if(input === "blue"){
        message = "the sky is blue";
    }else if (input === "red"){
        message = "roses are red";
    }else if (input === "orange"){
        message = "orange is orange";
    }else if(input === "yellow"){
        message = "bananas are yellow";
    }else if(input === "green"){
        message = "grass is green";
    }else if(input === "indigo"){
        message = "ink is indigo";
    }else if(input === "violet"){
        message = "violet you're violet";
    }else {
        message = "Your color is not cool enoughh!";
    }
    return message;
}

console.log(analyzeColour("blue"));
console.log(analyzeColour("red"));
console.log(analyzeColour("orange"));
console.log(analyzeColour("green"));
console.log(analyzeColour("violet"));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(input) {
    var message;

    switch(input) {
        case "red":
            message = "Roses are red";
            break;
        case "orange":
            message = "Orange you glad I didn't say banana";
            break;
        case "yellow":
            message = "Gold is yellow, sorta";
            break;
        case "green":
            message = "Grass is green";
            break;
        case "blue":
            message = "Blue is the color of the sky.";
            break;
        case "violet":
            message = "Violets are violet";
            break;
        case "indigo":
            message = "Jeans are indigo";
            break;
        default:
            message = "I don't know anything about the color " + input;
            break;
    }

    return message;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColorChoice = prompt("Please share your favorite color!");
var result = analyzeColor(userColorChoice);
console.log(result);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total) {

    if(luckyNumber == 0) {
        return total;
    } else if(luckyNumber === 1) {
        return total - (total * .1)
    } else if(luckyNumber === 2) {
        return total - (total * .25);
    } else if(luckyNumber === 3) {
        return total - (total * .35);
    } else if(luckyNumber === 4) {
        return total - total * .5;
    } else if(luckyNumber === 5) {
        return total - total * 1;
    } else {
        return total;
    }
}

console.log(calculateTotal(1, 500));
console.log(calculateTotal(2, 200));
console.log(calculateTotal(3, 300));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 1000));
console.log(calculateTotal(40, 1200));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("How much was the total amount spent?");
alert("Your lucky number is " + luckyNumber);
alert("Price before the discount is " + total);
alert("after the discount, your total is " + calculateTotal(luckyNumber, total));

