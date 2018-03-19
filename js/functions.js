"use strict";
// var daysRentedMermaid = prompt("how many days did you keep the little mermaid?");
// var daysRentedBear = prompt("how many days did you keep brother bear?");
// var daysRentedHercules = prompt("how many days did you keep hercules?");
//
// var total = (daysRentedMermaid * 3) + (daysRentedBear * 3) + (daysRentedHercules * 3);
//
// alert("You'll pay " +  total);
// var hoursGoogle = prompt("how many hours did you work for Google?");
// var hoursAmazon = prompt("how many hours did you work for Amazon?");
// var hoursFacebook = prompt("how many hours did you work for Facebook?");
//
// var total = (hoursAmazon * 380) + (hoursFacebook * 350) + (hoursGoogle * 400);
//
// alert("You're making " + total)
//
//
// var classFull = confirm("Is class full?");
// var conflictingSchedule = confirm("Does your schedule work?");
//
// var willItWork = (!classFull && !!conflictingSchedule);
//
//
// alert("class is " + willItWork);
//

// var itemsBought = confirm("Did you buy more than 2 items?");
// var offerExpire = confirm("did your offer expire?");
// var premiumMember = confirm("are you a premium member?");
//
// var discountOffered = (!offerExpire && !!premiumMember && !!itemsBought);
//
// alert("CONGRADUALTIONS YOU'RE A WINNER  " + discountOffered);
//

var username = prompt("Enter Username");
var usernameMaxLength = username.length <=20;


var password = prompt("Enter password");




// function sayHello(){
//     alert("hello there!");
//
// }
// sayHello("codeup");
//



/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

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

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

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