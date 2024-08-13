"use strict";
/* ------------------------------------------------ *** -----------------------------------------------------*/
// Question no : 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
/* ------------------------------------------------ *** -----------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise : 41 .  " MAGICIANS "  //
let magician_name = ["Harry Houdini", "Shin Lim", "Dynamo", "David Blaine", "Derren Brown"];
function show_magicians(magician_name) {
    magician_name.forEach(magician_name => {
        console.log(magician_name);
    });
}
show_magicians(magician_name);
/* ------------------------------------------------ *** -----------------------------------------------------*/
/* ------------------------------------------------ *** -----------------------------------------------------*/
// Question no : 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
/* ------------------------------------------------ *** -----------------------------------------------------*/
// Exercise : 42 .  " GREAT MAGICIANS" //
function make_great(magician_name) {
    for (let index = 0; index < magician_name.length; index++) {
        magician_name[index] = magician_name[index] + "The Great";
    }
}
make_great(magician_name);
/* ------------------------------------------------ *** -----------------------------------------------------*/
/* ------------------------------------------------ *** -----------------------------------------------------*/
// Question no : 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
/* ------------------------------------------------ *** -----------------------------------------------------*/
// Exercise : 43 .  " UNCHANGED MAGICIANS "  //
function made_great(magician_name) {
    let greatMagicians = [];
    magician_name.forEach(magician_name => {
        greatMagicians.push(`${magician_name} the Great`);
    });
    return magician_name;
}
let greatMagicians = made_great(magician_name.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magician_name); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
/* ------------------------------------------------ *** -----------------------------------------------------*/ 
