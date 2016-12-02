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



////////////////////
//Define Functions//
////////////////////


// Function to print tree to console with height h and character char
var buildTree = function(obj) {
  var h = obj.height;
  var char = obj.character;

  var i = 0;
  for (var i = 1; i <= h; i++) {
    console.log(makeSpaces(h - i) + makeTreeBody(i*2 - 1, char) + makeSpaces(h - i));
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

///////////////////////
//Add Event Listeners//
///////////////////////






