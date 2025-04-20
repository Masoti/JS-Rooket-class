'use strict'

let list = [1,2,3,4,5,50];

list[3] = 11;

// list[8] = 17;

console.log("items : " + list.length);


// function sum(array) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }   
// console.log(sum(list))

// function sum(array) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];  
//         console.log('item : ' + array[i]+ ' total : ' + total)
//     }
// }   
//  sum(list)

//  function sum(array) {
//     let total = 0
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];  
//     }
//     return total
// }   
//  console.log(sum(list))

// function sum(array) {
// let i = 0;
// let total = 0
//     while (i < array.length) {
//         total += array[i];  
//         i++;
//     }
//     return total;
// }
// console.log(sum(list))


// function sum(array) {
// let i = 0;
// let total = 0
// array.forEach(function(item) {
//     // console.log(item)
//     total += item
//     });
//     return total;
// }
// console.log(sum(list))


function sum(numbers) {
    return numbers.reduce(function(total , value) {
        return total + value;
    }, 0)
}
console.log(sum(list))
