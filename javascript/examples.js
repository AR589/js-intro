// ========================================================
// Intro to JavaScript
// ========================================================

// Enable strict mode for better errors
'use strict'

// COMMENTS ===============================================
// You can put comments into your code,
// just like HTML or CSS.

// This is a commment.

/* This is also a comment */

// DATA TYPES =============================================
// There are 5 data types you'll use regularly.

// String: Any sequence of text that is wrapped in quotes.
var myString = 'I am a string'

// Number: Numbers *do not* have quotes around them.
var myNumber = 9

// Boolean: true or false
var myBoolean = true

// Array: A data structure that can hold multiple values
// and data types. Values are accessed by numerical index,
// which starts at 0.
var myArray = ['JS is cool.', 9, false]
// console.log(myArray[0])

// Object: A data structure that can hold multiple values
// organized in key/value pairs. Data is accessed using
// the `.` operator.
var myObject = {
  name: 'Margo',
  species: 'dog',
  age: 7,
  legs: 4,
  cute: true,
  favoriteToys: ['rawhide', 'tennis ball']
}

// console.log(myObject.name)
// console.log(myObject.intro())

// Undefined: when a variable is declared but no value
// is assigned
var myCoolVar

// Null: represents the intentional absence of any value
var myNullVar = null

// BASIC OPERATORS ========================================
// An operator is a mathematical symbol which produces
// a result based on two values.

// ADDITION (+)
// Adds two numbers together or combine two strings
// console.log(6 + 4)
// console.log('Hello' + 'World')

// SUBTRACTION (-)
// console.log(6 - 4)

// MULTIPLICATION (*)
// console.log(6 * 4)

// DIVISION (/)
// console.log(6 / 4)

// ASSIGNMENT (=)
// Assigns a value to a variable
// var x = 10

// VARIABLES ==============================================
// Variables are little containers where you can keep
// pieces of data.

var myVar = 'JavaScript is cool.'

// VARIABLE NAMING RULES ----------------------------------
// - Names can contain letters, digits, underscores (_),
//   and dollar signs ($)
// - Names must begin with a letter, $, or _
// - Names are case sensitive
// - Reserved words cannot be used as names
//   - break         - case         - catch
//   - class         - const        - continue
//   - debugger      - default      - delete
//   - do            - else         - export
//   - extends       - finally      - for
//   - function      - if           - import
//   - in            - instanceof   - new
//   - return        - super        - switch
//   - this          - throw        - try
//   - typeof        - var          - void
//   - while         - with         - yield

// FUNCTIONS ==============================================

function sayHello () {
  alert('Hello!')
}

// function sayHello (name) {
//   alert('Hello ' + name)
// }

// LOGICAL OPERATORS ======================================

// EQUALITY (===)
// Tests to see if two values are equal to one another
// and returns a true/false (Boolean) result.
// console.log(10 === 10)
// console.log(10 === 9)
// console.log(myNumber === 9)
// console.log(myObject.name === 'Dan')

// NOT (!)
// Returns the logically opposite value of what it precedes
// console.log(!true)

// NON-EQUALITY (!==)
// Tests to see if two values are equal to one another
// and returns a true/false (Boolean) result.
// console.log(10 !== 10)
// console.log(10 !== 9)
// console.log(myNumber !== 9)
// console.log(myObject.name !== 'Dan')

// CONDITIONALS ===========================================
// Conditionals are code structures which allow you to test
// if an expression returns true or not and run code based
// on the result.

// if (true) {
//   console.log('Yay!')
// } else {
//   console.log('Awww.')
// }
