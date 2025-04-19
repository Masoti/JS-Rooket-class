'use strict'


var ajax = new XMLHttpRequest();


ajax.open('GET' , 'https://jsonplaceholder.typicode.com/users');


// ajax.onreadystatechange = function() {
//     if(this.readyState == XMLHttpRequest.DONE) {
//         if(this.status == 200) {
//             console.log('done' , this.responseText)
//         } else if(this.status == 404) {
//             console.log('users not found');
//         }
//     }
// }



ajax.addEventListener('load' , function() {
    if(this.readyState == XMLHttpRequest.DONE) {
        if(this.status == 200) {
            console.log('done' , this.responseText)
        } else if(this.status == 404) {
            console.log('users not found');
        }
    }
});

ajax.send();
