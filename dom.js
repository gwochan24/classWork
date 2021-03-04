/*
//Old ways of declaring functions.
let domAcess2 = function () {};
function domAcess3() {}

//Arrow functions introducted in ES6.
let domAcess1 = () => {};

//Method within an object.
domAcess4: function(){
 
};

*/

const demoId = document.getElementById('demo');
demoId.style.border = '3px solid purple';

// Accessing elements in a div using a get class names and looping through the resulting array.
const demoClass = document.getElementsByClassName('demo');
for (let i = 0; i < demoClass.length; i += 1) {
  demoClass[i].style.border = '3px solid orange';
}

// Accessing elements a get tag name and looping through the resulting array.
const demoTag = document.getElementsByTagName('article');
for (let i = 0; i < demoTag.length; i += 1) {
  demoTag[i].style.border = '3px solid pink';
}

// Accessing elements a get query selector.
const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '3px solid green';

// Accessing elements a get query selector all and looping using the forEach.

const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach((x) => {
  x.style.border = '3px solid black';
});
