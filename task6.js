// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // ('.list-group-item:second-child');
// secondItem.style.color = 'green';

// var input = document.querySelector('input');
// input.value = 'namaste';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send"

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++){
odd[i].style.backgroundColor = "green";
}