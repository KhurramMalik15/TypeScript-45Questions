// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


let animals:string[]=["Cow","Horse","Goat"];

// for (var index = 0; index < animals.length; index++) {
//     console.log(" A ".concat(animals[index], " Would Make A Great Pet."));
// }

 animals.forEach(animals =>{
     console.log(`A ${animals} Would Make A Great Pet.`);
 })

console.log("Any of these animals would make a great pet!");

