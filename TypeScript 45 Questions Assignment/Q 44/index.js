"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function sandwitch_Items(...items) {
    console.log(`\nMake A Sandwitch Using With Following Items :\n${items.join(' , ')}`);
}
sandwitch_Items("ketchup", "Fried Egg", "Onion");
sandwitch_Items("Chicken", "Butter");
sandwitch_Items("Tomato", "Onion", "Mayonis", "Cauliflower");
