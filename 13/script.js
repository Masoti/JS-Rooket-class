'use strict'

var list = [1,2,3,4,5,6];
var list2 = [7,8,9]

var newlist = list2.concat(list);
newlist.sort()
// var filterlist = newlist.filter(function(item) {
//     return item % 2 != 0;
// })



var maplist = newlist.map(function(item) {
    return  item * 2 ;
})

console.log(maplist)