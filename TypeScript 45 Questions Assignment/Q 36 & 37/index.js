"use strict";
/* ----------------------------------------------- *** -----------------------------------------------*/
//*   Question no : 36   *//
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
/* ----------------------------------------------- *** -----------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise  : 36        // " T-SHIRT " //
function make_shirt(size, message) {
    console.log(`The Shirt Will Be ${size} And That Lines ${message} Printed On Shirt.`);
}
make_shirt("small", "Life Is Full Of Happiness And Pains . So Always keep Smile On your Face");
/* ----------------------------------------------- *** -----------------------------------------------*/
//*   Question no : 37   *//
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
/* ----------------------------------------------- *** -----------------------------------------------*/
// Exercise  : 37         // " LARGE SHIRTS " //
function Make_Shirt(size = "Large", message = "I Love Typescript") {
    console.log(`The Shirt Will Be ${size} And That Lines ${message} Printed On Shirt.`);
}
Make_Shirt();
Make_Shirt("Small");
Make_Shirt(undefined, "Always Be Careful From Wrong People !");
/* ----------------------------------------------- *** -----------------------------------------------*/ 
