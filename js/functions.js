"use strict";

//check github functions from ulysses-web-exercise

function sayHello(name) {
    return "Hello " + name + "!";

}

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

var helloMessage = sayHello("nestor");
console.log(helloMessage);


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var myName = "Nestor Salinas";
console.log(sayHello(myName));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);


function isTwo(x) {
    return x === 2;

}


console.log('random:' + random);
console.log('isTwo(random): ' + isTwo(random));

//


// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */

// function calculatedTip(percent, total) {
//     var tipAmount = percent * total
//
// }


function calculatedTip(percent, total) {
    var tipAmount = (percent / 100) * total;
    return tipAmount;


}

console.log('calculatedTip(0.20, 20): ' + calculatedTip(0.20, 20));
console.log('calculatedTip(0.25, 25.50): ' + calculatedTip(0.25, 25.50));
console.log('calculatedTip(0.15, 33.42): ' + calculatedTip(0.15, 33.42));



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function promptNumber(question) {
    var userInput = prompt(question);
    return parseFloat(userInput);
}


var amountToTip = calculatedTip(
    promptNumber('tip percentage?'),
    promptNumber('bill today?')
);



alert('you should tip $' + amountToTip);


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */



function applyDiscount(){
    var price = prompt("what is the price?");
    var discountPercent = .25;
    var discountAmount = price * discountPercent;
    return alert("this is the discounted price " + (price - discountAmount));
}


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */









// function decrement(someNumber) {
//     console.log("nestor")
//     console.log(someNumber - 1)
//     return someNumber - 1;
//
// }





// function decrement(someNumber) {
//     return someNumber - 1 ;
// }
//
// var thetThing = decrement(12);
// console.log(thetThing);