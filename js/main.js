
// function
function post() {
	// get value of name input
	var nameval = document.getElementById('name').value;
	// get value of comment input
	var commentval = document.getElementById('comment').value;

	// DIV FOR JS 
	var big = document.createElement('div');
	big.className = 'bigdiv col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8';
	big.id = 'big';

	// DIV inside of big to put the name and comment boxes
	var small = document.createElement('div');
	small.className = 'smalldiv';
	small.id = 'small';
	big.appendChild(small);

	// -----------NAME BOX----------
	// create an h3 element variable
	var title = document.createElement('h3');
	// Creates a class for the name box
	title.className = 'titlebox';
	// creates a text node with nameval inside it
	var textnode = document.createTextNode(nameval);
	// puts textnode into h3
	title.appendChild(textnode);
	// puts title into big
	small.appendChild(title);

	// -----------COMMENT BOX------------
	// create a paragraph variable
	var message = document.createElement('h4');
	// Creates a class for the comment box
	message.className = 'messagebox';
	// creates a text node with commentval inside it
	var newtext = document.createTextNode("Comment: " + commentval);
	// puts comment input into a paragraph
	message.appendChild(newtext);
	// puts p into the div
	small.appendChild(message);

	// --------CREATE DIV FOR BUTTONS------
	var btndiv = document.createElement('div');
	btndiv.id = 'btndiv';
	big.appendChild(btndiv);

	// ----------HIDE BUTTON------------
	// create a button to hide comment box
	var hide = document.createElement('button');
	// creates an id for the hide button
	hide.id = 'hide';
	// Adds class to hide button
	hide.className = 'btn btn-primary';
	// Creates text inside the button
	hide.textContent = 'Hide';
	// Puts hide button into btndiv
	btndiv.appendChild(hide);
	

	// -----------CLEAR BUTTON---------
	// create a button to remove the new box
	var clear = document.createElement('button');
	// Adds an Id to the remove button
	clear.id = 'clear';
	// Adds a class to the remove button
	clear.className = 'btn btn-primary';
	// Creates text inside the button
	clear.textContent = 'Clear';
	// Puts the remove button inside the div
	btndiv.appendChild(clear);

	// Displays Big div onto the screen, inside the body
	document.body.appendChild(big);

	// ---TOGGLE HIDE BUTTON--
	// This code toggles between showing and hiding a div box
	hide.addEventListener('click', function() {
	var x = document.getElementById('small');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
});

	// ---CLEAR BUtton---
	// This code clears the div big from the body
	clear.addEventListener('click', function() {
	var y = document.getElementById('big');
	if (y.style.display === 'block') {
		y.style.display = 'none';
		// body.removeChild(big);
	} else {
		y.style.display = 'none';
	}
});

};






// // ----------ASK BUTTON---------
// // create a new ask button at the top of the page
// var ask = document.createElement('button');
// ask.id = 'ask';
// ask.className = 'btn';
// big.appendChild(ask);
// ask.setAttribute('onclick', 'askme()');

// Function---HIDEME 
	
// Function---REMOVEME 
	
// Function---AASKME
	// function askme() {
	// 	console.log("look what this does");
	// }
	// put a new value into the h1 from an array
	// hide previous comments






