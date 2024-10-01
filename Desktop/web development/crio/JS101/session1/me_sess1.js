//----------------------- first program in js ----------------------
// console.log("Hello World");

// console.log("Dheeraj Kumar");




// ====================== primitives ==========================
/*
Values which cannot be changed.
-> Primitive values are numbers and strings, among other things.
*/

// console.log(2);
// console.log("Hello");


/*
Primitive Data Types:

-> Numbers (2, -100, 3.14 and others), used for math calculations.
-> Strings ("hello", "abracadabra", and others), used for text.
-> Booleans (true and false), used for logical operations.

*/



//======================== Variables ===============================
/* 
-> variables are named container used to store, change, and access information.
-> we first declare the varable and the we assign the value.
*/

// let greeting = "Hello";
// let animal = "panda";
// let age = "51";


/* 
Declaration
  -> We use the keyword var along with the name of the varible.
*/
// var firstName;  // declaration
// console.log(firstName);


/*
Assignment: 
  we simply assign some value to the variable.
*/
// var firstName;
// firstName = "Dheeraj";  // Assignment
// console.log(firstName);



/*
=> Reassignment:
    -> Variable reassignment is simple. Let's understand with an example-
    -> For a variable age that we previosly initialized with the value 20, you can reassign the value 40 simply by -

*/

// var age = 20; // Initialization
// age = 40;  // Reassignment



// code demo - Re-assignment

// var temp; // Declaration
// temp = "Dheeraj"; // Assignment
// console.log(temp);

// temp = 10;    // re-assignment
// console.log(temp);

/*
Js allows you to store a number (10) in a variable which had a string ("Dheeraj") ----> Dynamically Typed
*/

//================== Activity - Declaring Variables ===================
/* 
-> Declare a variable greeter using var
-> Initialize it with "hey hi"
-> Print the variable greeter in your program. What do you get?
-> Next, try re-assigning the variable to say "Hey"
-> Print the variable greeter again.
*/

// var greeter; // declare
// greeter = "hey hi"; // initialize
// console.log(greeter);  // hey hi

// greeter = "hey"; // re-assigning
// console.log(greeter);


//======================= const: Keyword and Syntax ====================

/*
Declaring a variable using const keyword instead of var creates a variable whose value can’t be changed.
const means constant i.e. whose value can not be changed.

const variableName;

*/



//===================== Let ========================================
/*
-> Declaring variables using let will stop this confusion as it’s more strict than var.
*/

// ================== let, consot, var ==========================

/*
keyword       allows re-declaration         allows re-assignment?
var           yes                           yes
let           No                            Yes
const         No                            No
*/

// ================== let, consot, var ==========================


//===================== Activity - Playing with let =====================
// Now re-declare a new variable using let

// let greeting = "say hi";
// console.log(greeting);
// let greeting = "say Hello"; // error
// console.log(greeting);

/* SyntaxError: Identifier 'greeting' has already been declared */

//===================== Activity - Playing with let =====================



//======================== Activity - Playing with const===============
// Declare a variable greetin using const, and re-assign it to "say Hello"

// const greeting = "say Hi";
// greeting = "say Hello"; // TypeError

/*
 TypeError: Assignment to constant variable. at Object.<anonymous> (C:\Users\hp\Desktop\web development\crio\JS101\session1\sess1.js:148:10)

*/

// Now, re-declare it to "say Hey"
// const greeting = "say Hey"; // SyntaxError
/* SyntaxError: Identifier 'greeting' has already been declared */


//======================== Activity - Playing with const===============




//========================== Activity - Guess the output ================
/* 
var a = 10;
console.log(a); // 10

var b = a;
console.log(a); // 10
console.log(b); // 10

a = 20;
console.log(a); // 20
console.log(b); // 10

*/

//========================== Activity - Guess the output ================



//=================== Variables and values in memory ===================

/*
Summary: 
  -> Values are stored in the memory, and variables are the labels pointing to the memory address where the value is stored. 
  
  -> When we assign a value to a variable either directly (e.g. b = 20;) or from one variable to another 
  (e.g. b = a;), a new copy of that value is created and stored in the memory and the variable points to it.
*/

//=================== Variables and values in memory ===================




// ================== Summary ==========================
/*
-> JavaScript is used for creating web pages.
-> Primitive data types are string, boolean, number.
-> Variables are named container used to store, change, and access information


-> Valid variable names should:
    -> Start with a letter, underscore, or dollar sign.
    -> After the first letter, you can use numbers, letters, underscores, dollar signs.

*/

/*
keyword       allows re-declaration         allows re-assignment?
var           yes                           yes
let           No                            Yes
const         No                            No
*/

// ================== Summary ==========================

