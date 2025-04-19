'use strict'

// Syntax
// if (condition) {
//     //  block of code to be executed if the condition is true
//   }
// Example
// Make a "Good day" greeting if the hour is less than 18:00:
  
// if (hour < 18) {
//   greeting = "Good day";
// }

// Syntax
// if (condition) {
//     //  block of code to be executed if the condition is true
//   } else {
//     //  block of code to be executed if the condition is false
//   }
// Example
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }  

// Syntax
// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
//   }
// Example
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

var a = 50;
var b = 8;

// &&
// ||
// !

if (a == 5) {
    console.log('print 5');
} else if (b == 6) {
    console.log('print 6')
} else if (a == 7) {
    console.log('print 7')
} else {
    console.log('it`s wrong');
}
