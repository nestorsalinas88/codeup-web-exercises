"use strict";

var i = 2;
while( i <= 65536){
    console.log(i);
    i*=2
}



//1. generate a random number between 50 & 100
//2. code should generate numbers between 1 - 5
//3. use a do-while loop structure
//4. is it login to console the amount of cones sold to each person

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones + ' cones to sell');

do {
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log('I would like ' + cones + ' cones please!');
    if(allCones < cones) {
        console.log("can't sell you " + cones + " I only have " + allCones);
        allCones -= allCones;
        console.log('my inventory says I have ' + allCones + ' left');
        console.log("cones === 0, yay I am done");
    } else {
        allCones -= cones;
        console.log("you still have " + allCones +" left");
    }

}while (allCones > 0);

