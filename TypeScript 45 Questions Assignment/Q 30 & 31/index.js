"use strict";
/* ------------------------------------------ *** -------------------------------------------------*/
//*  Question no : 30  *//
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
/* ------------------------------------------ *** -------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
// EXERCISE # 30 (HELLO ADMIN)  //
let usernames = ["Samra", "Hiba", "Admin", "Aryan", "Hamzah", "Fahad"];
for (let User of usernames) {
    if (User == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${User}, thank you for logging in again.`);
    }
}
/* ------------------------------------------ *** -------------------------------------------------*/
//*  Question no : 31  *//
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
/* ------------------------------------------ *** -------------------------------------------------*/
// EXERCISE # 31 ( NO USERS)  //
let username = ["Samra", "Hiba", "Admin", "Aryan", "Hamzah", "Fahad"];
if (username.length == 0) {
    console.log("We Need To Find Some Users !");
}
else {
    username = [];
    console.log("All Users Have Been Removed That We Don't Have Any User Means " + username.length);
}
/* ------------------------------------------ *** -------------------------------------------------*/ 
