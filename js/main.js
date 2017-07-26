

// function
function post() {
// get value of iname input
var nameval = document.getElementById('name').value;
// get value of comment input
var commentval = document.getElementById('comment').value;

// create a div 
var big = document.createElement('div');
big.className = 'bigdiv';

// -----------NAME BOX----------
// create an h3 element variable
var title = document.createElement('h3');
// creates a text node with nameval inside it
var textnode = document.createTextNode(nameval);
// puts textnode into h3
title.appendChild(textnode);
// puts title into big
big.appendChild(title);

// -----------COMMENT BOX------------
// create a paragraph variable
var message = document.createElement('h4');
// creates a text node with commentval inside it
var newtext = document.createTextNode("Comment: " + commentval);
// puts comment input into a paragraph
message.appendChild(newtext);
// puts p into the div
big.appendChild(message);

// ----------HIDE BUTTON------------
// create a button to hide comment box
var hide = document.createElement('button');
// creates an id for the hide button
hide.id = 'hide';
// Adds class to hide button
hide.className = 'btn';
// Puts hide button into big div
big.appendChild(hide);
// Creates an onclick attribute for the hide button 
hide.setAttribute('onclick', 'hideme()');

// -----------REMOVE BUTTON---------
// create a button to remove the new box
var remove = document.createElement('button');
// Adds an Id to the remove button
remove.id = 'remove';
// Adds a class to the remove button
remove.className = 'btn';
// Puts the remove button inside the div
big.appendChild(remove);
// Gives the remove button an onclick function
remove.setAttribute('onclick', 'removeme()');
// Displays Big div onto the screen, inside the body
document.body.appendChild(big);

}

// ----------ASK BUTTON---------
// create a new ask button at the top of the page
var ask = document.createElement('button');
ask.id = 'ask';
ask.className = 'btn';
big.appendChild(ask);
ask.setAttribute('onclick', 'askme()');

// Function---HIDEME 
	function hideme() {
		console.log("happy function");
	};

// Function---REMOVEME 
	function removeme() {
		console.log("now what do i need to do?");
	};

// Function---AASKME
	function askme() {
		console.log("look what this does");
	}
	// put a new value into the h1 from an array
	// hide previous comments






