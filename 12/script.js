'use strict'

var list = [1,2,3,4,5]


function sum(numbers) {
    // for (var i = 0; i < array.length; i++) {
    //     total = total + array[i];
    // }

    // var i = 0;
    // while (i < 6) {
    //     total = total + array[i];
    //     i++;
    // }
    // var total = 0;

    // array.forEach(function(item) {
    //     total += item;
    // });


    return numbers.reduce(function(total,value) {
        console.log(total , value);
        return total + value * 2;
    },10);
}


console.log(sum(list))