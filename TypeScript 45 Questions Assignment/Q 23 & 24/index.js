/* ------------------------------------------- *** ------------------------------------------*/
// Question no : 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
/* ------------------------------------------- *** ------------------------------------------*/
//*    EXERCISE  23 & 24 (CONDITIONAL STATEMENTS TEST)    *//
var number = 22;
var mountain = "Mount Everest";
var array = [8, 4, 8, "Rio", "Prince", 2];
// Test 1: Equal To (True)
console.log("Is number == 50 ? I predict False.");
console.log(number == 50);
// Test 2: Equal Value & Equal Type (True)
console.log("Is number === 50 ? I predict False");
console.log(number === 50);
// Test 3: Inequality OR Not Equal (False)
console.log("Is number != 50 ? I predict True");
console.log(number != 50);
// Test 4:Inequality Value & Type OR Not Equal Value & Type(False)
console.log("Is number !== 250 ? I predict True");
console.log(number !== 50);
// Test 5: Greater Than(True)
console.log("Is number > 50 ? I predict False");
console.log(number > 50);
// Test 6:Less Than 9=(False)
console.log("Is number < 50 ? I predict True");
console.log(number < 50);
// Test 7:Greater Than & Equal To(True)
console.log("Is number >= 50 ? I predict False");
console.log(number >= 50);
// Test 8:Less Than & Equal To(False)
console.log("Is number <= 50 ? I predict True");
console.log(number <= 50);
// Test 9:Checking Truthiness(True)
console.log("Is number ? I predict True");
console.log(number ? true : false);
// Test 10:Checking Falsiness (False)
console.log("Is !number ? I predict False");
console.log(!number);
/* ------------------------------------------- *** ------------------------------------------*/
// Question no : 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
/* ------------------------------------------ *** --------------------------------------------*/
// Test : Equality With String (False)
console.log("Is Mountain == K2 ? I predict False");
console.log(mountain == "K2");
// Test : Inequality With String (True)
console.log("Is Mountain !== K2? I predict True");
console.log(mountain !== "K2");
// Test : Using LowerCase Function (False)
console.log("Is Mountain.tolowercase() == K2? I predict False");
console.log(mountain.toLowerCase() == "K2");
// Test : Using LowerCase Function (True)
console.log("Is Mountain.tolowercase() !== K2? I predict True");
console.log(mountain.toLowerCase() !== "K2");
// LOGICAL OPERATORS ( AND & OR)
// Test : Using AND Operators (True)
console.log("Is number > 50 && < 22 ? I predict True");
console.log(number == 22 && number < 50);
// Test : Using OR Operator (False)
console.log("Is number > 50 || < 22 ? I predict False");
console.log(number > 50 || number < 22);
// ARRAY TESTS 
// Test : Item Is In Array(True)
console.log("Is Rio in array ? I predict True");
console.log(5 in array);
// Test : Item Is Not In Array(False)
console.log("Is 8 is not in array? i predict False");
console.log(7 in array);
/* ------------------------------------------ *** --------------------------------------------*/ 
