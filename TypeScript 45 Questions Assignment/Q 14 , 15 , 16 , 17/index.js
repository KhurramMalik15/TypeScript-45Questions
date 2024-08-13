"use strict";
// Exercise 15 //  // Changing Guest List //
/* < ---------------------------------------- * --------------------------------------------> */
// Question:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
// Answer:
var not_coming = "Steven Jobs";
var new_guest = "Imran Khan";
guest_list[1] = new_guest;
// for (let index = 0; index < guest_list.length; index++) {
//     console.log(' Respected Sir, \nAssalam O Alaikum ! ' + guest_list[index] + ' I Would Like To Invite You For Dinner Tomorrow At 5 Star Hotel.So Please Attend My Dinner Party.\n\Thank You !\n')
// }
// console.log(`Mr ${not_coming} will not attend tomorrow dinner party due to some emergency`);
/* < ---------------------------------------- * --------------------------------------------> */
// Exercise 16 //  // More Guests //
/* < ---------------------------------------- * --------------------------------------------> */
// Question:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Answer:
guest_list.unshift("Imran Khan", "Steven Jobs", "Bill Gates");
// for (let index = 0; index < guest_list.length; index++) {
//     console.log(' Respected Sir, \nAssalam O Alaikum ! ' + guest_list[index] + ' I Would Like To Invite You For Dinner Tomorrow At 5 Star Hotel.Actually I Found A Big Table So Please Attend My Party.\n\Thank You !\n')
// }
/* < ---------------------------------------- * --------------------------------------------> */
// Exercise 17 //  // Shrinking Guest List //
/* < ---------------------------------------- * --------------------------------------------> */
// Question:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. 
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Answer:
console.log("Unfortunately,I Can Not Arrange A Big Table For Tomorrow Dinner.Only Two Of You Are Invited");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir ".concat(remove_guest, " You Are Not Invited For Tomorrow Dinner."));
}
;
for (var index = 0; index < guest_list.length; index++) {
    console.log(' Respected Sir, \nAssalam O Alaikum ! ' + guest_list[index] + ' Yes , You Are Still Invited On Tomorrow Dinner.\n\Thank You !\n');
}
;
guest_list.splice(0, 2);
console.log(guest_list);
/* < ---------------------------------------- * --------------------------------------------> */ 
