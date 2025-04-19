'use strict'

// Syntax
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
// }
// Example
// The getDay() method returns the weekday as a number between 0 and 6.

// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

let a = 50;
let b = 8;


let num = 10;

switch (num) {
    case 10 :
    case 9 :
        console.log('print yes');
        break;
    case 8 : 
        console.log('print 8');
        break;
    default:
        console.log('it`s wrong');
        break;
}

let num1 = 10;

switch (false) {
    case (num1 == 10 || num1 == 9):
        console.log('print yes')
        break;
    case (num1 >= 11):
        console.log('print 11+')
        break;
    default:
        console.log('it`s wrong');
        break;
}