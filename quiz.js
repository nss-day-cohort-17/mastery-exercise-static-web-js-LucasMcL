// Overall Objectives

// Create object from user input
// Create function that reads values from object to create tree in console
// Check to see if both fields have values in them
  // Do this within the function?  Elsewhere?

// Can you do carriage returns in a console?

// Additional: check to see if tree height input is number
// Additional: check to see if character input is a length of 1

///////////////////////
//Get Elements Needed//
///////////////////////



////////////////////
//Define Functions//
////////////////////

var buildTree = function(h, char) {
  var i = 0;
  while(i < h) {
    //use a while loop rather than a for loop so I can incriment i at beginning of loop
    i += 1;

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

var testTree3 = function() {
  console.log("  0  ");
  console.log(" 000 ");
  console.log("00000");
}

var testTree6 = function() {
  console.log("     0     ");
  console.log("    000    ");
  console.log("   00000   ");
  console.log("  0000000  ");
  console.log(" 000000000 ");
  console.log("00000000000");
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

///////////////////////
//Add Event Listeners//
///////////////////////






