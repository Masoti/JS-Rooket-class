'use strict'

var list = ['item',1,2,3,4,5,6,11,53,'ata'];
var list2 = [7,8,9]


// list.push(11);
// list.push(12);
// console.log(list);

// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list);

// console.log(list.unshift(2));
// console.log(list.unshift('new-item'));
// console.log(list);

// console.log(list.indexOf(4));
// console.log(list[list.indexOf(4)]);
// console.log(list.indexOf('item'));
// console.log(list[list.indexOf('item')]);

// console.log(list.splice(1,6));

// console.log(list.slice(1,8 ));

// console.log(list.join('-'));
// console.log(list.join(''));

console.log(list.concat(list2));
let newlist = list.concat(list2);
console.log(newlist);

console.log(newlist.sort());
newlist.sort()
console.log(newlist);
console.log(newlist.reverse());

let filterlist = newlist.filter(function(item) {
    return item % 2 != 0;
})
console.log(filterlist)



var maplist = newlist.map(function(item) {
    return  item * 2 ;
})

console.log(maplist)