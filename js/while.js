"use strict";

//we're always multiplying the initial number by * 2
var i = 2; /* initializer */
//assigning a variable before
while( i <= 65536 /*condition*/){
    console.log(i);/*thing we're repeating */
    i*=2 /* increment/decrement/accumulator*/
}




var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones + ' cones to sell');

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log('I would like ' + cones + ' cones please!');
    if(allCones <= cones) {
        console.log("can't sell you " + cones + " I only have " + allCones);
        allCones -= allCones;
        console.log('my inventory says I have ' + allCones + ' left');
        console.log("Yay I am done");
    } else {
        allCones -= cones;
        console.log("you still have " + allCones +" left");
    }

}while (allCones > 0);

