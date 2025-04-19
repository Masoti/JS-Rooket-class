'use strict'

// --------------------------------------

{/* <ul class="list-group" id="list-group">
<li class="item-group">Item 1</li>
<li class="item-group">Item 2</li>
<li class="item-group">Item 3</li>
</ul> */}


// alert('welcome to roocket')
// console.log(confirm('are u ready?'));
// console.log(prompt('what`s your name?'));

let title = document.querySelector('#title')

title.onmouseenter = function(event) {
    event.target.style.backgroundColor = 'red';
}

title.onmouseout = function(e) {
    e.target.style.backgroundColor = 'yellow';
}