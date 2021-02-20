'use strict';

let miles = process.argv[2];

let kilometre = (miles * 1.6)

console.log(miles, "miles is", kilometre, "is kilometres");

if (kilometre < 2) {

    console.log("Walk");
}

if (kilometre >= 2 && kilometre <= 6) {
    
    console.log("Bicycle");
}

if (kilometre > 6) {

    console.log("Bus");
}