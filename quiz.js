// Overall Objectives

// Create object from user input
// Create function that reads values from object to create tree in console
// Check to see if both fields have values in them
  // Do this within the function?  Elsewhere?

// Additional: check to see if tree height input is number
// Additional: check to see if character input is a length of 1

///////////////////////
//Get Elements Needed//
///////////////////////

var heightEl = document.getElementById('input_height');
var charEl = document.getElementById('input_char');
var btnEl = document.getElementById('grow_btn');
var specialEl = document.getElementById('special_btn');


////////////////////
//Tree Functions//
////////////////////


// Function to print tree to console with height h and character char
var buildTree = function(obj) {
  var h = obj.height;
  var char = obj.character;

  for (var i = 1; i <= h; i++) {
    console.log(makeSpaces(h - i) + makeTreeBody(i*2 - 1, char) + makeSpaces(h - i));
  }
}

// Function to print a special tree
var buildSpecialTree = function(obj) {
  var h = obj.height;
  var char = obj.character;
  for (var i = 1; i <= h; i++) {
    var treeBody = makeTreeBody(i*2 - 1, char);
    treeBody = treeBody.split('');
    treeBody[0] = "*";
    treeBody[i*2 - 2] = "*";
    treeBody = treeBody.join('');
    console.log(makeSpaces(h - i) + treeBody + makeSpaces(h - i));
  }
}

// Function to return a string of white spaces at n length
// Will be used in buildTree function
var makeSpaces = function(n) {
  // Empty array created at length n + 1
  // .join method to put spaces between array elements
  // End result is string of spaces length n
  return Array(n + 1).join(" ");
}

// Function to return a string of repeated character "char" at length n
// Will be used in buildTree function
var makeTreeBody = function(n, char) {
  return Array(n + 1).join(char);
}


// *
// ***
// ***** h = 3, bottom row = 5 wide

// *
// ***
// *****
// *******
// *********  h = 5, bottom row = 9 wide

// *
// ***
// *****
// *******
// *********
// *********** h = 6, bottom row = 11 wide

// The number of characters in each row is equal to the
// row level (starting with 1, not 0) multiplied by 2, minus 1

// The number of spaces in each row (on either side) is equal to
// the total height minus the row number

//    *
//   *0*
//  *000*
// *00000*
//

///////////////////////
// Wrapper Functions //
///////////////////////

function whenKeyIsPressed (e) {
  if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
    if (heightEl.value === "" || charEl.value === "") {
      // exits function and gives alert if either input field is blank
      alert("Please fill out all fields");
      return
    }

    // Checks to see if number input is a number and is positive and whole
    if (isNaN(heightEl.value) === true) {
      alert("Please enter a number for the tree height");
      return
    }
    if (Number.isInteger(Number(heightEl.value)) === false || heightEl.value < 0) {
      alert("Please enter a positive whole number")
      return
    }
    var myObj = {height: heightEl.value, character: charEl.value}
    buildTree(myObj);
  }
}

function whenButtonIsPressed () {
  if (heightEl.value === "" || charEl.value === "") {
    // exits function and gives alert if either input field is blank
    alert("Please fill out all fields")
    return
  }
  // Checks to see if number input is a number and is positive and whole
  if (isNaN(heightEl.value) === true) {
    alert("Please enter a number for the tree height");
    return
  }
  if (Number.isInteger(Number(heightEl.value)) === false || heightEl.value < 0) {
    alert("Please enter a positive whole number")
    return
  }
  var myObj = {height: heightEl.value, character: charEl.value}
  buildTree(myObj);
}

function whenSpecialButtonIsPressed () {
  if (heightEl.value === "" || charEl.value === "") {
    // exits function and gives alert if either input field is blank
    alert("Please fill out all fields")
    return
  }
  // Checks to see if number input is a number and is positive and whole
  if (isNaN(heightEl.value) === true) {
    alert("Please enter a number for the tree height");
    return
  }
  if (Number.isInteger(Number(heightEl.value)) === false || heightEl.value < 0) {
    alert("Please enter a positive whole number")
    return
  }
  var myObj = {height: heightEl.value, character: charEl.value}
  buildSpecialTree(myObj);
}

///////////////////////
//Add Event Listeners//
///////////////////////

//Event listener to listen for enter key button press in either text field
heightEl.addEventListener("keypress", whenKeyIsPressed);
charEl.addEventListener("keypress", whenKeyIsPressed);
btnEl.addEventListener("click", whenButtonIsPressed);
specialEl.addEventListener("click", whenSpecialButtonIsPressed);



