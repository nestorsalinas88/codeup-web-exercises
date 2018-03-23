"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
    alert("Great, " + userInput + " is my favorite color too!");

var daysRentedMermaid = prompt("how many days did you keep the little mermaid?");
var daysRentedBear = prompt("how many days did you keep brother bear?");
var daysRentedHercules = prompt("how many days did you keep hercules?");

var pricePerDay = 3;

var totalDays = daysRentedMermaid + daysRentedBear + daysRentedHercules;

var total = (pricePerDay * totalDays);

alert("You'll pay " +  total);


var hoursGoogle = prompt("how many hours did you work for Google?");
var hoursAmazon = prompt("how many hours did you work for Amazon?");
var hoursFacebook = prompt("how many hours did you work for Facebook?");

var total = (hoursAmazon * 380) + (hoursFacebook * 350) + (hoursGoogle * 400);

alert("You're making " + total)


var classFull = confirm("Is class full?");
var conflictingSchedule = confirm("Does your schedule work?");

var willItWork = (!classFull && !!conflictingSchedule);


alert("class is " + willItWork);


var itemsBought = parseInt(prompt("Did you buy more than 2 items?"));
var offerExpire = prompt("did your offer expire?") == 'yes';
var premiumMember = prompt("are you a premium member?") == 'yes';

var discountOffered = (itemsBought > 2 && offerExpire) || premiumMember;

alert("CONGRADUALTIONS YOU'RE A WINNER  " + discountOffered);

// Use the alert function to show a message that says 'Welcome to my Website!'.
//
//     Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
//     For example, if the user enters "blue", your code should alert a message that says:
//
//     "Great, blue is my favorite color too!"
//
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.