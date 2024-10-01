/**
 * Expressions
 * Mathematical Operators (+, -, *, /, %) and Precedence
 * Relational / Logical Operators (>, <, ===, !==, &&, ||)
 * If-Else statements - Part I
 * Introduction to Functions - Part I
    - Parametric & Non-Parametric
    - Calling a function
    - Returning values
 * JS program from scratch on Replit
    - Take user i/p
 * Introduction to Crio Platform

 */

//==================== Arithmetic Operators ==========================
// console.log(2 + 2); // 4

// console.log(29 - 19); // 10

// console.log(19 - 29); // -10

// console.log(5 * 15); //75

// console.log(10 / 2); // 5

// console.log(1 / 2); // 0.5

// console.log(10 % 2); // 0


/**
What if you want to obtain the value of a power of a particular number?
Example: What is 2 raised to 3? - How can you compute this programmatically is JS? 2^3
 */

// console.log(2 ** 3); //8


//==================== Arithmetic Operators ==========================




// ================== code demo - Checking relationships ==============

// let a = 10;
// let b = 20;

// console.log(a == b); // false
// console.log(a === b); // false

// console.log(a >= b); // false
// console.log(a <= b); // true

// console.log(a !== b); // true
// console.log(a != b); // true


/*
==> Activity - === v/s ==

- In the previous slide, you saw both === and == returned false while comparing equality of a and b. So, what’s the difference between them?
Feel free to google it out.

==
Loose equality i.e. checks only on the basis of values, not types.


===
Strong equality i.e. checks on the basis of values as well as types.

*/

//--------------- Activity - === v/s ==  --------------------
// console.log(0 === false); // false
// console.log(0 == false); // true

// console.log(37 == '37'); // true
// console.log(37 === '37'); // false

/**
 * Output:
true (converts false boolean->0 number, for comparison)
false (no such conversion, strict comparison)

* Output:
true (converts ‘37’ string->37 number, for comparison)
false (no such conversion, strict comparison)
 */
//--------------- Activity - === v/s ==  --------------------


//--------------- Activity - Checking relationships || ------------------
// let a = 10;
// let b = 20;

// console.log(a !== b && a > b); // false
// console.log(a !== b || a > b); // true

//--------------- Activity - Checking relationships || ------------------

// ================== code demo - Checking relationships ==============



// ================== Recap - if else  =======================
/**
 * Use the if statement to specify a block of code to be executed if the condition is true, and use else to specify a block of code to be executed if the condition is false.


Syntax:

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

Example:
if(hour < 18){
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
 */


// ================== Recap - if else  =======================




//====================== Code Demo - if else ================
/**
- Check if a number is positive or negative.
- Print corresponding message based on the condition result
- Using If Else construct

 */

// let num = 20;
// if(num >= 0){
//   console.log("Number is positive");
// } else {
//   console.log("Number is negative");
// }




/**
- Given an age variable :		const age = 16;
- Print “Can drive” if the age is greater than 18
- Print “Cannot drive” otherwise
- Use the If Else construct

 */

const age = 16;
if(age > 18){
  console.log("Can drive");
} else {
  console.log("Cannot drive");
}
//====================== Code Demo - if else ================
