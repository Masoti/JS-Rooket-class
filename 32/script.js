'use strict'


var ajax = new XMLHttpRequest();

var data = {
    username : 'hesammoousavi',
    email : 'hesam@gmail.com'
}


ajax.open('POST', 'https://jsonplaceholder.typicode.com/users');
ajax.setRequestHeader('Content-type' , "application/json; charset=UTF-8")


ajax.addEventListener('load' , function() {
    if(this.readyState == XMLHttpRequest.DONE) {
        if(this.status == 201) {
            console.log('done');
            var data = JSON.parse(this.responseText);
            console.log(data.username);
        } else {
            console.log(this.status);
        }
    }
})

ajax.send(JSON.stringify(data))