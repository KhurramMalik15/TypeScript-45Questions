// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Safwan", "Rafee", "Mustafa", "Alyan", "Rohan", "Talha"];
var message1 = ' Assalam O Alaikum! ';
var message2 = ' How Are You And How Was Your Day? ';
for (var index = 0; index < names.length; index++) {
    console.log(message1 + names[index] + message2);
}
