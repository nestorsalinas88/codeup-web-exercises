"use strict";

///// FUNCTIONS ARE SUPPOSE TO HELP YOU SIMPLIFY NOT MAKE HARDER

//we know when the loop needs to end so we use a for loop
// function showMultiplicationTable(x) {
//     for(var i = 1; i <=10; i++){
//         console.log(x + " X " + i + " = " + (x * i));
//
//     }
//
// }
// //for loops need a initializer, condition, and increment statements
//
// showMultiplicationTable(7);
//
//
// //
// // //if new random needs to be selected every time needs to be with in the function
// // //local and global
// //
// //
//
// //when generating random numbers you should initialize with the middle value and add up to where you'd like to stop
//
// function randomInt(start, finish) {
//     return Math.floor(Math.random() * (end - start)) + start;
// }
//
//
//
// for (var i = 1; i <= 10; i++) {
//     var x = Math.floor(Math.random() * 180) + 20;
//     if ((x % 2 === 0)) {
//         console.log(x + " is even ");
//     } else {
//         console.log(x + " is odd");
//     }
// }
//




var string;
for (var i = 1; i <=  10; i++){
    i = i.toString();

    string = i.substring(i.length - 1);


    console.log(string.repeat(i));
}

//when using loops  try and keep all in initializer, codition, and increment statement section

for(var i = 100; i >= 5; i -= 5){

    console.log(i);
}