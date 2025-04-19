'use strict'

// --------------------------------------

var i = 0;
var list = [];

while (i < 10) {
    if(i % 2 === 0) {
        console.log('A')
    } else {
        console.log('B')
    }

    if(i % 2 !== 0) {
        list.push(i);
    }
    
    i++;
}

console.log(list);